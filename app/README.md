# In Remembrance – Funeral Planning App

A compassionate planning workspace for funeral services, wakes, and memorials. The project is a React + Vite single-page application styled with Tailwind CSS and powered by a lightweight local data layer that persists to `localStorage`.

## Project Structure

```
app/
├── src/
│   ├── api/            # base44-style local data client
│   ├── components/     # layout, UI primitives, checklist manager
│   ├── data/           # default checklist tasks
│   ├── entities/       # JSON schemas supplied with the brief
│   ├── hooks/          # shared React Query hooks
│   ├── pages/          # routed screens (welcome, dashboard, etc.)
│   └── utils/          # routing helpers and formatters
└── public/             # static assets served by Vite
```

## Prerequisites

- Node.js 18+
- npm 9+
- Visual Studio 2022 (optional) with the **Node.js development** workload if you prefer building/running inside VS.

## Getting Started (Visual Studio or CLI)

1. Open `\wsl.localhost\Ubuntu\home\ratan\Funeral App\Funeral App\Funeral App\app`.
   - In Visual Studio: `File > Open > Folder...` and pick the `app` directory.
   - From a terminal: `cd "\\wsl.localhost\Ubuntu\home\ratan\Funeral App\Funeral App\Funeral App\app"`.
2. Install dependencies (once):
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite prints a local URL (usually `http://localhost:5173`). Visual Studio’s Task Runner Explorer will also show and run these npm scripts if you prefer a GUI.
4. Build for production (optional):
   ```bash
   npm run build
   ```

## Data & Persistence

- The `src/api/base44Client.js` module mimics the base44 SDK described in the source files. It stores entities (`FuneralDetails`, `Guest`, `ChecklistItem`, `Expense`, `Photo`, `Message`, `Invitation`) in `localStorage` so your data survives refreshes.
- Entities mirror the JSON schemas that shipped in the brief; you’ll find those in `src/entities` for reference.

## Feature Highlights

- Guided welcome and setup flow to capture funeral details.
- Dashboard summarising tasks, guests, expenses, and gallery activity.
- Checklist-driven planning pages for the funeral service, wake, and memorial.
- Invitation compositor with live preview.
- Guest management with RSVP states and inner-circle markers.
- Inner circle chat, shared photo gallery, and budget tracker.
- Printable documentation (`/documentation`) rendered from the provided MainReadMe component.

## Notes

- All API interactions are client-side; no external services are required.
- Because assets and data live locally, clearing browser storage resets the app.
- The Tailwind build is intentionally unoptimised for clarity. If you need smaller bundles, enable more aggressive code-splitting in `vite.config.js`.

Happy planning, and take it slow.
