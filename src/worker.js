// ============================================================
// Carla Barbosa Estúdio — Cloudflare Worker & PWA Edge Runtime
// Ultra-fast Edge routing with Cloudflare Static Assets
// ============================================================

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Tentar servir arquivo estático do diretório dist/
    if (env.ASSETS) {
      try {
        const response = await env.ASSETS.fetch(request);
        if (response && response.status !== 404) {
          // Adicionar cabeçalho de segurança se for HTML
          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("text/html")) {
            const newHeaders = new Headers(response.headers);
            newHeaders.set("X-Content-Type-Options", "nosniff");
            newHeaders.set("X-Frame-Options", "DENY");
            newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
            return new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: newHeaders
            });
          }
          return response;
        }
      } catch (err) {
        console.warn("Asset fetch error:", err);
      }
    }

    // 2. Fallback SPA: qualquer rota desconhecida vai para o index.html
    if (env.ASSETS) {
      const indexRequest = new Request(new URL("/", request.url), request);
      return await env.ASSETS.fetch(indexRequest);
    }

    return new Response("Carla Barbosa Estúdio - Alta Cosmética & Rituais", {
      headers: { "Content-Type": "text/html; charset=utf-8" },
      status: 200
    });
  }
};
