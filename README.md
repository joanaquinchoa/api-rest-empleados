# api-rest-empleados

Prerequisitos: 

  Tener instalado Node.js y docker

Para iniciar la aplicación siga los siguientes pasos: 

1. Clone este repositorio o descarguelo en zip 
2. Abra una terminal y ubiquese sobre la carpeta (si descargo el zip, descomprimalo) raiz del proyecto (api-rest-empleados)
3. Inicie el servicio docker
4. Ejecute en la terminal el comando: docker pull redis
5. Ejecute en la terminal el comando: docker run -d --name redis -p 6379:6379 redis
6. Ejecute en la terminal el comando: npm install
7. Ejecute en la terminal el comando: npm start

Utilice la URL: http://localhost:3000/api/empleado para obtener o crear un empleado. 

****


