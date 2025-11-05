import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "in-remembrance-store";

const ENTITY_NAMES = [
  "FuneralDetails",
  "Guest",
  "ChecklistItem",
  "Expense",
  "Photo",
  "Message",
  "Invitation",
];

const defaultStore = ENTITY_NAMES.reduce((acc, name) => {
  acc[name] = [];
  return acc;
}, {});

const isBrowser = typeof window !== "undefined";

const loadStore = () => {
  if (!isBrowser) {
    return structuredClone(defaultStore);
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return structuredClone(defaultStore);
    }
    const parsed = JSON.parse(raw);
    return ENTITY_NAMES.reduce((acc, name) => {
      acc[name] = Array.isArray(parsed?.[name]) ? parsed[name] : [];
      return acc;
    }, structuredClone(defaultStore));
  } catch (error) {
    console.warn("Failed to load store, falling back to defaults:", error);
    return structuredClone(defaultStore);
  }
};

const persistStore = (store) => {
  if (!isBrowser) {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

const sortItems = (items, orderBy) => {
  if (!orderBy) {
    return items;
  }
  const direction = orderBy.startsWith("-") ? -1 : 1;
  const field = orderBy.replace(/^-/, "");
  return [...items].sort((a, b) => {
    const left = a?.[field];
    const right = b?.[field];
    if (left === right) {
      return 0;
    }
    if (left == null) {
      return 1;
    }
    if (right == null) {
      return -1;
    }
    if (left > right) {
      return direction;
    }
    if (left < right) {
      return -direction;
    }
    return 0;
  });
};

const matchesFilters = (item, filters = {}) => {
  return Object.entries(filters).every(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return true;
    }
    return item?.[key] === value;
  });
};

const delay = (result) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), 150);
  });

const createEntityApi = (entityName) => ({
  async list(orderBy, limit) {
    const store = loadStore();
    const items = sortItems(store[entityName], orderBy);
    return delay(limit ? items.slice(0, limit) : items);
  },
  async filter(filters = {}, orderBy, limit) {
    const store = loadStore();
    const filtered = store[entityName].filter((item) => matchesFilters(item, filters));
    const ordered = sortItems(filtered, orderBy);
    return delay(limit ? ordered.slice(0, limit) : ordered);
  },
  async get(id) {
    const store = loadStore();
    const item = store[entityName].find((entry) => entry.id === id);
    return delay(item ?? null);
  },
  async create(payload) {
    const store = loadStore();
    const timestamp = new Date().toISOString();
    const record = {
      id: uuidv4(),
      created_date: timestamp,
      updated_date: timestamp,
      ...payload,
    };
    store[entityName] = [...store[entityName], record];
    persistStore(store);
    return delay(record);
  },
  async update(id, payload) {
    const store = loadStore();
    let updatedRecord = null;
    store[entityName] = store[entityName].map((item) => {
      if (item.id === id) {
        updatedRecord = {
          ...item,
          ...payload,
          id,
          updated_date: new Date().toISOString(),
        };
        return updatedRecord;
      }
      return item;
    });
    if (!updatedRecord) {
      throw new Error(`${entityName} with id ${id} not found`);
    }
    persistStore(store);
    return delay(updatedRecord);
  },
  async delete(id) {
    const store = loadStore();
    const originalLength = store[entityName].length;
    store[entityName] = store[entityName].filter((item) => item.id !== id);
    if (store[entityName].length === originalLength) {
      throw new Error(`${entityName} with id ${id} not found`);
    }
    persistStore(store);
    return delay(true);
  },
});

export const base44 = {
  entities: ENTITY_NAMES.reduce((acc, name) => {
    acc[name] = createEntityApi(name);
    return acc;
  }, {}),
  async reset() {
    persistStore(structuredClone(defaultStore));
    return delay(true);
  },
};

export const loadInitialStore = loadStore;
