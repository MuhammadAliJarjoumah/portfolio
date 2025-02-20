
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/C:/Program Files/Git/home",
    "route": "/C:/Program Files/Git"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/home"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/**"
  }
],
  assets: {
    'index.csr.html': {size: 48971, hash: '396e8e20be5ecc71dd628cba789ad77bd2355137d70a7289da3c87e178f07a21', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 45623, hash: '449fc869c9257ddbc154b28c23a6c50eba5d7c4d88e8d679369bcf3b46bd856d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 98062, hash: 'a1a106460e22a077845e34e558b38018c61505a7bc71e07f5768e8925de75b0f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-VNPFCZNP.css': {size: 6884, hash: '1j6PurDEBTg', text: () => import('./assets-chunks/styles-VNPFCZNP_css.mjs').then(m => m.default)}
  },
};
