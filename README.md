# challengeCT

Hola, gracias por leer mi trabajo, voy a dejar algunas instrucciones de las rutas, y consideraciones que tome o pude haber tomado!

La ruta /auth posee las sub-rutas /signIn, /signUp y /logout.

/signIn y /signUp reciben los valores para logearse/registrarse, y si todo salio bien, devuelven un token.

la primera recibe 

{
  "email":"", "\n"
  "password":""
}

y la segunda
```javascript

{
  "username":"",
  "email":"",
  "password":"",
  "birthdate":"", //en formato "YYYY-MM-dd"
  "prefleng:"" // este puede ser javascript, java, pascal, c , kotlin, python, o "" (si no recibe nada o recibe "" guardo null) 
  
  }
  ```

  las passwords se guardan encriptadas en la base de datos.
  
/logout solo recibe el token por medio del header "token-access", y lo revoca (mediante redis).
 
tanto los logout como los signIn son guardados en logHistory.
 
 
las rutas /users y /repos poseen sus respectivos metodos get, get:id, put:id, delete:id y post (en el caso de users, el post seria /auth/signUp) siendo proyectname el id de un repositorio, y el email, el id de un usuario. para esto pude haber creado ids autoincrementables para cada tabla pero no lo vi necesario.

todos estos metodos necesitan que en el header "token-access" llegue un token valido, no expirado y no revocado. Podria haber hecho algo mas lindo y complejo, como que los usuarios guarden roles (user y superUser), si el token que llega es de un usuario con roll user, solo podria modificar, eliminar y visualizar sus datos y sus repositorios (asumiendo tambien, que en repositorio guardara una forgeign key a usuario.) mientras que un superuser podria acceder a todos los metodos sobre todos los datos.

Los metodos put, para comodidad del cliente, solo reciben los campos a modificar, en el caso del usuario, no se puede modificar el email (para evitar devolver un nuevo token, y eliminar el viejo valor en redis para agregar el nuevo, se podria hacer facilmente.)  esto ultimo lo pude haber modelado con un trigger en postgres, pero preferi hacerlo en la api por simplicidad.
 
 el post de /repos recibe 
 {
    "proyectname":"",
    "lenguaje":"", // Solo uno de los validos
    "description":"" // opcional.
 }
 
 eso es todo, Muchas gracias!!.
