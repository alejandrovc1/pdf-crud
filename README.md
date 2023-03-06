# pdf-crud!
INSTALACIÓN
1. Para ejecutar el proyecto, primero descarga el proyecto en github como un archivo comprimido .zip.
![image](https://user-images.githubusercontent.com/105444672/223030117-313505f5-625b-4d03-bb58-10b7ca3d4bd1.png)
2. Luego de descomprimirlo, abre una nueva ventana en visual studio code y arrastra la carpeta descomprimida hacia el editor de código.
3. Situate en la carpeta "pdf-crud-be" y abre una nueva terminal, haz el comando "npm i", con el cual instalarás todas las dependencias, luego, abre otra nueva terminal 
y haz lo mismo con la carpeta "pdf-crud-fe".
![image](https://user-images.githubusercontent.com/105444672/223030911-4bb9f9f2-c1c2-4479-984e-7a820ae76f21.png)
4. Realiza el comando "npm run dev" en cada una de las dos terminales que se abrieron anteriormente.
5. Dirígete a tu navegador y entra a: localhost:4000.

FUNCIONALIDADES <br>
-Registro: La aplicacion contiene autenticación, guarda un correo y una contraseña encriptada en una base de datos No-SQL, valida que se ingrese un correo verdadero y 
una contraseña. <br>
-Inicio de sesión: La aplicación permite iniciar sesión con un usuario previamente registrado, validando que el usuario exista en la base de datos y entregandole un token 
de autenticación mientras hace uso de la app.
![image](https://user-images.githubusercontent.com/105444672/223033532-d1d997d4-f43a-403f-a3f7-9981dc89704b.png)
-Guardado de un PDF(Create): Al entrar a la aplicación, se puede seleccionar el simbolo (+), para agregar un nuevo PDF a la lista, requeriendo seleccionar el archivo y 
un nombre a elección.
![image](https://user-images.githubusercontent.com/105444672/223033993-702692dd-e4cf-480b-b343-32d795a4a5dd.png)
-Lectura de un PDF(Read): Luego de agregar el PDF a la lista, se puede visualizar en una pestaña aparte, todo el contenido del PDF, seleccionando el ícono que 
aparece en la columna llamada "file".
![image](https://user-images.githubusercontent.com/105444672/223037320-faabc7ac-c36a-498e-a0e0-d3b3be02c576.png)
-Edición de un PDF(Update): Una vez guardado el pdf, podemos cambiarle el nombre y el archivo a ese registro que seleccionemos dandole click al ícono de lapiz de la columna edit.
![image](https://user-images.githubusercontent.com/105444672/223037429-9fcf669d-16a9-4298-b50b-d93512d4fb18.png)
-Borrado de un PDF(Delete: Una vez guardado el pdf, podemos eliminar el pdf que deseemos dandole click al ícono de bote de basura en la columna delete.<br>
-Cerrado de sesión: Para cerrar nuestra sesión y que se elimine nuestro token de acceso para la ruta protegida(crud), damos al botón de la esquina superior derecha.<br>
 


