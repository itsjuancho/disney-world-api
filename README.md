# Disney World API

## Configuración inicial

1. Clonaremos el repositorio

```sh
git clone https://github.com/itsjuancho/disney-world-api.git
cd disney-world-api/
```

2. Importamos la estructura de la base de datos.

```sh
mysql -h hostDatabase -u userDatabase disney_world < C:\ruta\al\archivo.sql
```

3. Encenderemos el servidor de Node.js

```sh
npm run start
```

Nuestra API debería de ser accesible desde [localhost:3000/api](http://localhost:3000/api).