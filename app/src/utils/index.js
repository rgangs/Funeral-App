export const PAGE_ROUTES = {
  Welcome: "/",
  FuneralSetup: "/setup",
  Dashboard: "/dashboard",
  Invitations: "/invitations",
  GuestList: "/guests",
  Funeral: "/funeral",
  Wake: "/wake",
  Memorial: "/memorial",
  InnerChat: "/inner-chat",
  PhotoGallery: "/photos",
  Budget: "/budget",
  Documentation: "/documentation",
};

export const PAGE_SEQUENCE = [
  "Welcome",
  "FuneralSetup",
  "Dashboard",
  "Invitations",
  "GuestList",
  "Funeral",
  "Wake",
  "Memorial",
  "InnerChat",
  "PhotoGallery",
  "Budget",
  "Documentation",
];

export const createPageUrl = (pageName) => PAGE_ROUTES[pageName] ?? "/";

export const formatDate = (value) => {
  if (!value) {
    return "—";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatCurrency = (amount) => {
  if (amount == null || Number.isNaN(Number(amount))) {
    return "—";
  }
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(Number(amount));
};
