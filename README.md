# Ecommerce de Golf - Frontend

Este proyecto es un frontend para un ecommerce de golf, desarrollado con React. La aplicación permite a los usuarios registrarse, iniciar sesión, ver productos, añadir productos al carrito, crear pedidos y ver sus datos de perfil.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Context](#context)
- [Rutas](#rutas)
- [Estilos](#estilos)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
    ```sh
    https://github.com/manudana11/fronend-ecommerce
    ```

2. Instala las dependencias:
    ```sh
    cd fronend-ecommerce
    npm install
    ```

3. Inicia la aplicación:
    ```sh
    npm start
    ```

## Uso

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando sus datos.
- **Login de usuarios**: Los usuarios pueden iniciar sesión con sus credenciales.
- **Ver productos**: Los usuarios pueden ver una lista de productos disponibles.
- **Añadir al carrito**: Los usuarios pueden añadir productos al carrito de compras.
- **Crear pedidos**: Los usuarios pueden crear pedidos con los productos del carrito.
- **Ver perfil**: Los usuarios pueden ver sus datos y pedidos en su perfil.
- **Logout**: Los usuarios pueden cerrar sesión.

## Estructura del Proyecto

```plaintext
ecommerce-golf/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── Cart/
│   │   ├── Login/
│   │   ├── Signup/
│   │   ├── Profile/
│   │   ├── GolfClubs/
│   │   ├── Irons/
│   │   ├── FairwayWoods/
│   │   ├── Drivers/
│   │   ├── Wedges/
│   │   ├── Accessories/
│   │   └── Balls/
│   ├── context/
│   │   ├── ProductContext/
│   │   ├── UserContext/
│   │   ├── OrderContext/
│   │   └── CategoryContext/
│   ├── styles/
│   │   └── colors.scss
│   ├── App.jsx
│   ├── App.scss
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```


## Componentes Principales

- **Header**: Encabezado de la aplicación con navegación y buscador.
- **Footer**: Pie de página de la aplicación.
- **Home**: Página principal de la aplicación.
- **Products**: Página para visualizar todos los productos.
- **Cart**: Página del carrito de compras.
- **Login**: Página de inicio de sesión.
- **Signup**: Página de registro de usuarios.
- **Profile**: Página del perfil del usuario.
- **GolfClubs, Irons, FairwayWoods, Drivers, Wedges, Accessories, Balls**: Páginas para visualizar productos por categoría.

## Context

La aplicación utiliza Context para la gestión del estado global:

- **ProductContext**: Gestiona el estado de los productos y el carrito de compras.
- **UserContext**: Gestiona el estado del usuario y la autenticación.
- **OrderContext**: Gestiona el estado de los pedidos.
- **CategoryContext**: Gestiona el estado de las categorías de productos.

## Rutas

Las rutas principales de la aplicación son:

- **/**: Home
- **/products**: Productos
- **/golfClubs**: Golf Clubs
- **/irons**: Irons
- **/fairwayWoods**: Fairway Woods
- **/drivers**: Drivers
- **/wedges**: Wedges
- **/accessories**: Accessories
- **/balls**: Balls
- **/cart**: Carrito de compras
- **/users/login**: Login
- **/users/signup**: Registro
- **/users/conecteduser**: Perfil del usuario

## Estilos

La aplicación utiliza SASS para los estilos. El archivo `colors.scss` define los colores utilizados en toda la aplicación para mantener la consistencia visual.

## Contribución

Para contribuir a este proyecto, sigue estos pasos:

1. Crea una rama (`feature/nueva-caracteristica`).
2. Realiza tus cambios.
3. Haz un commit de tus cambios (`git commit -m 'Añadir nueva característica'`).
4. Sube la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
