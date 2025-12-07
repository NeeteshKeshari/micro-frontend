# Lawedcue microfrontend POC using AWS Amplify

New multi-repo Module Federation sandbox with a host shell and two remotes (frontend + CRM), plus a template for future remotes. Each package lives in its own folder so you can push them to separate repos later.

## Layout
- `host-shell/` – owns routing and frames remotes; renders `frontend-remote` at `/`, `crm-remote` at `/crm`, and `segmentless-remote` at `/segmentless` (host controls top-level paths).
- `frontend-remote/` – simple marketing/learner surface exposed as `frontend/App`.
- `crm-remote/` – remote with nested inner navigation to prove it can manage its own routes.
- `segmentless-remote/` – example remote that keeps navigation off the host URL by using internal tab state (no router dependency).
- `future-remote-template/` – copy/paste starting point for another remote.

## Dev quickstart
In separate terminals:

```sh
# host shell
cd host-shell
npm install
npm run dev # PORT=4173 by default

# frontend remote
cd ../frontend-remote
npm install
npm run dev -- --port 4174

# crm remote
cd ../crm-remote
npm install
npm run dev -- --port 4175

# segmentless remote
cd ../segmentless-remote
npm install
npm run dev -- --port 4181
```

Visit http://localhost:4173 and use the nav to toggle remotes. The host consumes the remotes via Module Federation, so no reverse proxies are needed.

## Remote URLs and ports
- Host reads remotes from env: `FRONTEND_REMOTE_URL`, `CRM_REMOTE_URL`, and `SEGMENTLESS_REMOTE_URL` (defaults to the localhost dev URLs above). You can add others by extending `host-shell/vite.config.js`.
- Each project supports `PORT` to change its dev/preview port.

## Adding a future remote
1. Copy `future-remote-template` to a new folder (and repo).
2. Update `package.json` name and `vite.config.js` `name`/`PORT`/`exposes`.
3. Expose your entry component (default `./App`).
4. Point the host at the new remote entry URL by exporting another `remotes` entry in `host-shell/vite.config.js` and adding a route in `host-shell/src/App.jsx`.

## What this proves
- Host-controlled navigation with the frontend remote rendered at `/`, CRM at `/crm`, and a segmentless remote at `/segmentless`.
- CRM demonstrates inner navigation via its own nested routes while staying inside the shell.
- `segmentless-remote` shows a pattern for remotes that must not influence the host URL (uses local tab state instead of routing).
- Future remotes can follow the template without changing the existing ones.
