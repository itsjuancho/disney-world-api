# Disney World API

API para obtener, modificar, agregar y eliminar Series y/o Películas, Personajes y Géneros cinematográficos del Mundo de Disney.

## To-Do

- Corregir datos de documentación
- Crear middlewares para validar y sanitizar los datos que vienen por body/params

## Configuración inicial

Para evitar diferencias en Sistemas Operativos, los siguientes pasos serán usados bajo las Bash de Git.

1. Clonaremos el repositorio

```sh
git clone https://github.com/itsjuancho/disney-world-api.git
cd disney-world-api/
```

2. Importamos la estructura de la base de datos.

```sh
mysql -h hostDatabase -u userDatabase disney_world < C:\ruta\al\archivo.sql
```

3. Reemplazaremos el nombre del archivo **.env-base** a **.env**. Luego accederemos al archivo y modificaremos las variables de entorno acorde a las propias credenciales. **IMPORTANTE:** No modificar la variable de entorno DB_DIALECT, puesto que esa es la especificación bajo la cual el ORM interpretará que motor de base de datos se estará usando.

```sh
mv .env-base .env
nano .env
```

4. Instalaremos las dependencias. Luego, encenderemos el servidor de Node.js

```sh
npm install
npm run start
```

Nuestra API debería de ser accesible desde [http://localhost:3000/api](http://localhost:3000/api).