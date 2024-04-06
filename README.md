## Programa weon para poder escribir comentarios en negrita con mayusculas en youtube
El objetivo es simple, que tus comentarios resalten lo mas posible dentro del mar de comentarios en videos live en youtube

### ¿Cómo funciona?

Escribes lo que quieres decir en el campo de texto y automaticamente se reemplazan los carácteres por homoglyfos que se ven iguales a la letra en mayuscula en negrita e italizado, luego lo copias con el boton y pegas en el chat de youtube

### ¿Cómo correrlo?

Si tienes instalado `NextJS`, basta con correr `npm run start` y la página queda disponible en `localhost:3000`

También puedes hacerlo funcionar con docker usando estos comandos:

`docker build -t griton-youtube .`

Con esto creas el contenedor

`docker run -p 3000:3000 griton-youtube`

Con esto montas el contenedor una vez está creado

*de todas maneras si estás aca no debería tener que explicar estas cosas pero en fin...*

**hecho en 30 minutos con la ayuda de ~~Skynet~~ ChatGPT*
