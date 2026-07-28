import fs from "node:fs/promises";

await fs.mkdir("dist/server", { recursive: true });
await fs.writeFile(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const url = new URL(request.url);
    url.pathname = "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
  }
};\n`,
);
