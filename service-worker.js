/* ==========================================================
   SERVICE WORKER
   NUESTROS 2 AÑOS ❤️
========================================================== */

const CACHE_NAME = "nuestros-2-anos-v1";


/* ==========================================================
   ARCHIVOS PRINCIPALES
========================================================== */

const ARCHIVOS_PRINCIPALES = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
];


/* ==========================================================
   INSTALACIÓN
========================================================== */

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then((cache) => {

                return cache.addAll(
                    ARCHIVOS_PRINCIPALES
                );

            })

    );

    self.skipWaiting();

});


/* ==========================================================
   ACTIVACIÓN
========================================================== */

self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches
            .keys()
            .then((nombresCache) => {

                return Promise.all(

                    nombresCache.map(
                        (nombreCache) => {

                            if (
                                nombreCache !==
                                CACHE_NAME
                            ) {

                                return caches.delete(
                                    nombreCache
                                );

                            }

                        }
                    )

                );

            })

    );

    self.clients.claim();

});


/* ==========================================================
   PETICIONES
========================================================== */

self.addEventListener("fetch", (event) => {

    if (
        event.request.method !== "GET"
    ) {
        return;
    }


    event.respondWith(

        caches
            .match(event.request)
            .then((respuestaCache) => {

                if (respuestaCache) {
                    return respuestaCache;
                }


                return fetch(event.request)
                    .then((respuestaRed) => {

                        return respuestaRed;

                    });

            })

    );

});