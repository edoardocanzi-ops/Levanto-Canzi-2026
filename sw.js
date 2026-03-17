self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installato');
});

self.addEventListener('fetch', (e) => {
    // Lasciamo un fetch handler vuoto: basta questo a Chrome per considerarla una PWA valida.
});
