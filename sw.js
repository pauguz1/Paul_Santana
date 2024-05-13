


const CACHE_STATIC_PAGE = 'static-pages-v1.012';



function limpiarCache(){
    return caches.keys().then(k =>{
        k.forEach(key=>{//recorremos las llaves
            /**
             * Comparamos que la key sea diferene a la variable con la version mas actual
             * y si contiene el formato de la variable entonces borramos las versiones anteriores
             * ejmplo variableActual= stV1.0  stV0.9 <-- es diferente a la actual y tiene el formato stV
             */
            if(key !== CACHE_STATIC_PAGE && key.includes('static-pages-v')){
                caches.delete(key);//borramos todas las key que no concuerden con la version actual
            }
        });
    });
}
//evento que se activa cuando se instala el service worker
self.addEventListener('install', e => {


    const lecturaCache = caches.open(CACHE_STATIC_PAGE).then(cache=>{
        return  cache.addAll([
            '',
            '/',
        ]);//agregamos las paginas estaticas a agregar
    });
    console.log('instalando');
    e.waitUntil(lecturaCache);

});


//evento que se activa cuano se activa el service worker
self.addEventListener('activate', e => {
    var response = limpiarCache();
    e.waitUntil(response);
});

// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);

});

//Cache with Network Fallback (revisamos primero el cache y luego la red)
self.addEventListener('fetch', e => {
    
        //verificamos que el request este en el cache
    const respuesta = caches.match(e.request)
        .then(responseCache => {
            //si si esta etonces regresamos la respuesta
          if (responseCache) {
            return responseCache;
          }

          //si no encontramos nada en el cache entonces realizamos la peticion a internet
          return fetch(e.request)
            .then(response => {
              const tipo = response.headers.get('content-type');
  
              // Verifica si el tipo de contenido es HTML, CSS, JavaScript, SVG o imagen y guárdalo en caché si es así
              if (tipo && (tipo.includes('text/html') || tipo.includes('text/css') || tipo.includes('application/javascript') || tipo.includes('image/svg+xml') || tipo.includes('image/'))) {
                caches.open(CACHE_STATIC_PAGE)
                  .then(cache => {
                    //metemos el contenido de la respuesta al cache storage
                    cache.put(e.request, response);
                  });
              }
              //regresamos la respuesta de internet
              return response.clone();
            });
        });
    //regresamos la respuesta
    e.respondWith( respuesta );
  });






