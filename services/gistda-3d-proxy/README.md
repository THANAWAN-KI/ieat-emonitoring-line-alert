# GISTDA Thailand LOD1 streaming connector

Project root for Vercel: `services/gistda-3d-proxy`.

This service streams the national GISTDA tileset and its requested child tiles.
It does not download a demo area or expose the API key in the browser.

## Configuration

- Set the Vercel environment secret `GISTDA_3D_API_KEY` to the GISTDA key.
- Set `ALLOWED_ORIGIN` to `https://thanawan-ki.github.io`.
- Deploy this directory with the Node.js runtime.
- Health endpoint: `/api/tiles/health`.
- National tileset endpoint: `/api/tiles/tileset.json`.

The existing GitHub Actions secret cannot be read by a live GitHub Pages site
or automatically retrieved by Vercel. Configure it directly in the backend,
or use an authorized deployment workflow to transfer it.

After this service is deployed and its endpoint verified, configure the
e-Monitoring viewer to load that endpoint, start in 3D, use the current estate
as camera focus, and remove the Bang Pa-in snapshot labels and coverage filter.
Until an endpoint is available, the existing production viewer is preserved.

Upstream source:
https://3d.gistda.or.th/services
