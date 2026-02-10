self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("soicau").then(c=>c.addAll([
   "./","./index.html","./app.js"
  ]))
 );
});
