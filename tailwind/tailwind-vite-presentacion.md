# Tailwind CSS con Vite

**U-TAD - Desarrollo Web**

---

## Tabla de Contenidos

1. [¿Qué es Tailwind CSS?](#qué-es-tailwind-css)
2. [Ventajas de Tailwind CSS](#ventajas-de-tailwind-css)
3. [Instalación con Vite](#instalación-con-vite)
4. [Colores](#colores)
5. [Medidas (Sizing)](#medidas-sizing)
6. [Estados Interactivos](#estados-interactivos)
7. [Pseudo-clases](#pseudo-clases)
8. [Diseño Responsive](#diseño-responsive)
9. [Flexbox](#flexbox)
10. [Grid](#grid)
11. [Dark Mode](#dark-mode)
12. [Mejores Prácticas](#mejores-prácticas)
13. [Ejercicios Prácticos](#ejercicios-prácticos)

---

## ¿Qué es Tailwind CSS?

**Tailwind CSS** es un framework de CSS de utilidad (utility-first) que permite construir interfaces de usuario personalizadas de forma rápida y eficiente.

### Características principales:

- **Utility-first**: Clases pequeñas y reutilizables
- **Altamente personalizable**: Configuración flexible
- **Responsive por diseño**: Mobile-first approach
- **Sin opiniones sobre el diseño**: A diferencia de Bootstrap, no impone un estilo específico

### Diferencias con otros frameworks:

| Framework | Tipo | Personalización | Tamaño |
|-----------|------|-----------------|--------|
| **Tailwind** | Utility-first | Alta | Pequeño (con purge) |
| **Bootstrap** | Component-based | Media | Grande |
| **Bulma** | Component-based | Media | Mediano |

---

## Ventajas de Tailwind CSS

### ✅ Ventajas principales:

1. **Manejo sencillo de estados** (hover, focus, active, etc.)
   - Aplicas estados directamente en el HTML
   - No necesitas escribir CSS adicional

2. **Ahorro de tiempo**
   - No pierdes tiempo pensando en nombres de clases
   - Desarrollo más rápido y predecible

3. **Cambios seguros**
   - Las clases son locales al componente
   - No afectas otros elementos por accidente

4. **Altamente personalizable**
   - A diferencia de Bootstrap, todo es configurable
   - Define tu propio sistema de diseño

5. **Documentación excelente**
   - [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
   - Ejemplos claros y búsqueda rápida

### ⚠️ Consideraciones:

- **Curva de aprendizaje inicial**: Requiere conocer las clases de utilidad
- **HTML más largo**: Muchas clases en el markup
- **Requiere configuración**: Para proyectos grandes, necesitas organización

---

## Instalación con Vite

### Paso 1: Crear proyecto Vite

```bash
npm create vite@latest
```

**Configuración recomendada:**
- Project name: `estilos` (o el nombre que prefieras)
- Framework: `React`
- Variant: `JavaScript`

### Paso 2: Navegar al proyecto e instalar dependencias

```bash
cd estilos
npm install
```

### Paso 3: Instalar Tailwind CSS

Documentación oficial: [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Paso 4: Configurar Tailwind

Edita el archivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Paso 5: Configurar CSS

**Crea o edita** `src/index.css` (o `src/main.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Paso 6: Importar CSS en tu aplicación

En `src/main.jsx`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ← Importar aquí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Paso 7: Limpiar archivos CSS innecesarios

**Elimina** `App.css` para evitar conflictos con los estilos de Tailwind.

**Actualiza** `App.jsx` para eliminar la importación:

```javascript
// ❌ Elimina esta línea
// import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline text-center pt-8">
        Hello Tailwind!
      </h1>
    </div>
  )
}

export default App
```

### Paso 8: Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`

---

## Colores

Documentación: [https://tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors)

### Colores de fondo (Background)

```jsx
// Sintaxis: bg-{color}-{shade}
<div className="bg-slate-600">Background gris oscuro</div>
<div className="bg-blue-500">Background azul</div>
<div className="bg-red-400">Background rojo claro</div>
```

**Paleta de tonos**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Colores de texto

```jsx
// Sintaxis: text-{color}-{shade}
<p className="text-white">Texto blanco</p>
<p className="text-gray-700">Texto gris oscuro</p>
<p className="text-blue-500">Texto azul</p>
```

### Colores personalizados

#### Opción 1: Color arbitrario (inline)

```jsx
<p className="text-[#d2d255]">Color hexadecimal personalizado</p>
<div className="bg-[rgb(123,45,67)]">Background RGB personalizado</div>
```

#### Opción 2: Configurar en `tailwind.config.js` (recomendado)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'azul-claro': '#242cff',
        'azul-oscuro': '#0d1b3e',
        'marca': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
    },
  },
}
```

**Uso:**

```jsx
<p className="bg-azul-oscuro text-azul-claro">
  Mi clase personalizada
</p>

<button className="bg-marca-500 hover:bg-marca-900">
  Botón con color de marca
</button>
```

### Ejemplo completo: Botón con estilos

```jsx
<button className="bg-azul-claro text-white p-2 rounded-lg w-24 mx-auto block my-8">
  Suscríbete
</button>
```

**Desglose de clases:**

- `bg-azul-claro` → Color de fondo personalizado
- `text-white` → Texto blanco
- `p-2` → Padding de 0.5rem (8px)
- `rounded-lg` → Border radius grande
- `w-24` → Ancho de 6rem (96px)
- `mx-auto` → Margen horizontal automático (centra horizontalmente)
- `block` → Display block
- `my-8` → Margen vertical de 2rem (32px)

### Opacidad

Puedes controlar la opacidad de cualquier color con `/`:

```jsx
<div className="bg-blue-500/50">Background azul al 50% de opacidad</div>
<div className="bg-red-600/25">Background rojo al 25% de opacidad</div>
<div className="text-gray-900/80">Texto gris al 80% de opacidad</div>
```

### Gradientes

Documentación: [https://tailwindcss.com/docs/gradient-color-stops](https://tailwindcss.com/docs/gradient-color-stops)

```jsx
// Gradiente de izquierda a derecha
<div className="bg-gradient-to-r from-azul-claro to-azul-oscuro">
  Gradiente horizontal
</div>

// Gradiente de arriba a abajo
<div className="bg-gradient-to-b from-purple-400 to-pink-600">
  Gradiente vertical
</div>

// Gradiente diagonal
<div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
  Gradiente diagonal con color intermedio
</div>
```

**Direcciones disponibles:**
- `to-t` → Top
- `to-b` → Bottom
- `to-l` → Left
- `to-r` → Right
- `to-tr` → Top right
- `to-tl` → Top left
- `to-br` → Bottom right
- `to-bl` → Bottom left

### Gradiente en texto (Text Gradient)

Documentación: [https://tailwindcss.com/docs/background-clip#cropping-to-text](https://tailwindcss.com/docs/background-clip#cropping-to-text)

```jsx
<div className="text-4xl font-extrabold">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div>
```

**Cómo funciona:**
1. `bg-gradient-to-r from-pink-500 to-violet-500` → Crea el gradiente
2. `bg-clip-text` → Recorta el gradiente al texto
3. `text-transparent` → Hace el texto transparente para ver el gradiente

### Bordes con color

```jsx
<div className="border-2 border-red-500">
  Borde rojo de 2px
</div>

<div className="border-4 border-blue-300 rounded-xl">
  Borde azul claro con esquinas redondeadas
</div>
```

---

## Medidas (Sizing)

### Width (Ancho)

Documentación: [https://tailwindcss.com/docs/width](https://tailwindcss.com/docs/width)

```jsx
// Anchos predefinidos
<div className="w-40">Ancho de 10rem (160px)</div>
<div className="w-64">Ancho de 16rem (256px)</div>
<div className="w-full">Ancho del 100%</div>
<div className="w-screen">Ancho del viewport</div>

// Anchos en fracciones
<div className="w-1/2">50% del contenedor padre</div>
<div className="w-1/3">33.33% del contenedor padre</div>
<div className="w-2/3">66.66% del contenedor padre</div>
```

### Width personalizado

#### Opción 1: Valor arbitrario

```jsx
<div className="w-[170px]">Ancho de 170px</div>
<div className="w-[50vw]">Ancho del 50% del viewport</div>
```

#### Opción 2: Configurar en `tailwind.config.js`

```javascript
export default {
  theme: {
    extend: {
      spacing: {
        '42': '170px', // Se aplica a width, height, padding, margin
      },
      width: {
        '128': '32rem', // Solo se aplica a width
      }
    },
  },
}
```

**Uso:**

```jsx
<div className="w-42">Ancho de 170px (usando spacing)</div>
<div className="w-128">Ancho de 32rem (usando width)</div>
```

### Height (Alto)

Documentación: [https://tailwindcss.com/docs/height](https://tailwindcss.com/docs/height)

```jsx
// Altos predefinidos
<div className="h-20">Alto de 5rem (80px)</div>
<div className="h-screen">Alto del viewport completo</div>

// Altos en fracciones (relativos al padre)
<div className="h-[100px]">
  <div className="h-1/3">Ocupa 1/3 del padre (33.33px)</div>
  <div className="h-2/3">Ocupa 2/3 del padre (66.66px)</div>
</div>
```

### Min y Max

```jsx
// Mínimos
<div className="min-w-full">Ancho mínimo del 100%</div>
<div className="min-h-screen">Alto mínimo del viewport</div>

// Máximos
<div className="max-w-md">Ancho máximo de 28rem</div>
<div className="max-w-7xl mx-auto">Contenedor máximo centrado</div>
<div className="max-h-96">Alto máximo de 24rem</div>
```

### Tamaños comunes

```jsx
// Contenedor responsivo centrado
<div className="max-w-7xl mx-auto px-4">
  Contenedor de página
</div>

// Card con dimensiones fijas
<div className="w-80 h-64">
  Card de 320px × 256px
</div>

// Altura completa
<div className="min-h-screen">
  Ocupa toda la altura de la pantalla
</div>
```

---

## Estados Interactivos

Tailwind facilita el manejo de estados sin necesidad de escribir CSS adicional.

### Hover (al pasar el ratón)

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
  Hover me
</button>

<a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
  Enlace con hover
</a>
```

### Focus (al enfocar)

```jsx
<input
  type="text"
  className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
  placeholder="Escribe aquí..."
/>
```

### Active (al hacer clic)

```jsx
<button className="bg-green-500 active:bg-green-700 active:scale-95">
  Click me
</button>
```

### Disabled (deshabilitado)

```jsx
<button
  disabled
  className="bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
>
  Deshabilitado
</button>
```

### Ejemplo completo: Input con validación

```jsx
<div className="space-y-2">
  <input
    className="border border-gray-300 w-full px-3 py-2 rounded-md
               focus:outline-none focus:ring-1 focus:ring-purple-600
               invalid:focus:ring-red-400 peer"
    type="email"
    placeholder="E-mail"
  />
  <p className="text-red-400 hidden peer-invalid:block">
    El correo es incorrecto
  </p>
</div>
```

**Explicación:**
- `peer` → Marca el input como referencia
- `peer-invalid:block` → Muestra el mensaje solo si el input es inválido
- `focus:outline-none` → Elimina el outline por defecto
- `focus:ring-1 focus:ring-purple-600` → Añade un anillo morado al enfocar

### Combinando estados

```jsx
<button className="
  bg-blue-500 hover:bg-blue-600 active:bg-blue-700
  text-white font-semibold
  px-4 py-2 rounded-lg
  transition duration-200
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Botón interactivo
</button>
```

### Group hover (hover en grupo)

```jsx
<div className="group hover:bg-blue-50 p-4 rounded">
  <h3 className="text-gray-900 group-hover:text-blue-600">
    Título
  </h3>
  <p className="text-gray-600 group-hover:text-gray-900">
    Este texto cambia cuando haces hover en el contenedor
  </p>
</div>
```

---

## Pseudo-clases

Documentación: [https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after)

### Before y After

```jsx
<div className="
  before:content-['→'] before:mr-2 before:text-blue-500
  after:content-['←'] after:ml-2 after:text-red-500
">
  Contenido con flechas
</div>
```

### First, Last, Odd, Even

```jsx
<ul>
  <li className="first:font-bold">Primero (negrita)</li>
  <li className="odd:bg-gray-100">Segundo</li>
  <li className="odd:bg-gray-100">Tercero</li>
  <li className="last:border-b-0">Último (sin borde inferior)</li>
</ul>
```

### Marker (para listas)

```jsx
<ul className="marker:text-blue-500 marker:text-lg">
  <li>Item con marcador azul</li>
  <li>Otro item</li>
</ul>
```

### Selection (texto seleccionado)

```jsx
<p className="selection:bg-yellow-200 selection:text-yellow-900">
  Selecciona este texto y verás el fondo amarillo
</p>
```

### First-line y First-letter

```jsx
<p className="first-line:font-bold first-letter:text-4xl first-letter:font-bold">
  La primera línea estará en negrita y la primera letra será grande.
  Este es un ejemplo de cómo usar pseudo-clases en Tailwind CSS.
</p>
```

### Placeholder

```jsx
<input
  type="text"
  placeholder="Escribe tu nombre"
  className="placeholder:italic placeholder:text-gray-400"
/>
```

---

## Diseño Responsive

Documentación: [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design)

Tailwind usa un enfoque **mobile-first**, lo que significa que las clases sin prefijo se aplican a todos los tamaños, y los breakpoints se aplican hacia arriba.

### Breakpoints por defecto

| Prefijo | Tamaño mínimo | CSS equivalente |
|---------|---------------|-----------------|
| `sm` | 640px | `@media (min-width: 640px)` |
| `md` | 768px | `@media (min-width: 768px)` |
| `lg` | 1024px | `@media (min-width: 1024px)` |
| `xl` | 1280px | `@media (min-width: 1280px)` |
| `2xl` | 1536px | `@media (min-width: 1536px)` |

### Ejemplo básico

```jsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Texto que crece según el tamaño de pantalla
</div>
```

**Comportamiento:**
- Móvil: `text-sm` (14px)
- Tablet (≥768px): `text-base` (16px)
- Desktop (≥1024px): `text-lg` (18px)
- Desktop grande (≥1280px): `text-xl` (20px)

### Ejemplo completo: Card responsive

```jsx
<div className="
  w-full sm:w-1/2 lg:w-1/3
  p-4 sm:p-6 lg:p-8
  bg-white rounded-lg shadow-md
">
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
    Título responsive
  </h2>
  <p className="mt-2 text-sm md:text-base">
    Descripción que se adapta al tamaño de pantalla
  </p>
</div>
```

### Grid responsive

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div className="bg-gray-200 p-4">Item 1</div>
  <div className="bg-gray-200 p-4">Item 2</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 4</div>
</div>
```

**Comportamiento:**
- Móvil: 1 columna
- Small (≥640px): 2 columnas
- Large (≥1024px): 3 columnas
- Extra large (≥1280px): 4 columnas

### Ocultar/Mostrar elementos

```jsx
<div className="hidden md:block">
  Visible solo en tablet y desktop
</div>

<div className="block md:hidden">
  Visible solo en móvil
</div>
```

### Breakpoints personalizados

En `tailwind.config.js`:

```javascript
export default {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
}
```

Documentación: [https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints](https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints)

---

## Flexbox

Documentación: [https://tailwindcss.com/docs/flex](https://tailwindcss.com/docs/flex)

### Contenedor Flex

```jsx
<div className="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Dirección

```jsx
// Horizontal (por defecto)
<div className="flex flex-row">...</div>

// Horizontal invertido
<div className="flex flex-row-reverse">...</div>

// Vertical
<div className="flex flex-col">...</div>

// Vertical invertido
<div className="flex flex-col-reverse">...</div>
```

### Alineación

```jsx
// Centrar horizontal y verticalmente
<div className="flex justify-center items-center h-screen">
  <div>Centrado perfectamente</div>
</div>

// Justify content
<div className="flex justify-start">Inicio</div>
<div className="flex justify-center">Centro</div>
<div className="flex justify-end">Final</div>
<div className="flex justify-between">Entre</div>
<div className="flex justify-around">Alrededor</div>
<div className="flex justify-evenly">Equitativo</div>

// Align items
<div className="flex items-start">Arriba</div>
<div className="flex items-center">Centro</div>
<div className="flex items-end">Abajo</div>
<div className="flex items-baseline">Línea base</div>
<div className="flex items-stretch">Estirar</div>
```

### Wrap

```jsx
<div className="flex flex-wrap">
  {/* Los items se envuelven en múltiples líneas */}
</div>

<div className="flex flex-nowrap">
  {/* Los items NO se envuelven (por defecto) */}
</div>
```

### Gap

```jsx
<div className="flex gap-4">
  {/* Espacio de 1rem entre items */}
</div>

<div className="flex gap-x-4 gap-y-8">
  {/* Gap horizontal y vertical diferentes */}
</div>
```

### Flex grow y shrink

```jsx
<div className="flex">
  <div className="flex-1">Crece para llenar el espacio</div>
  <div className="flex-none w-32">Ancho fijo de 128px</div>
</div>
```

### Ejemplo: Navbar con Flexbox

```jsx
<nav className="flex justify-between items-center bg-gray-800 text-white p-4">
  <div className="text-xl font-bold">Logo</div>
  <div className="flex gap-4">
    <a href="#" className="hover:text-gray-300">Inicio</a>
    <a href="#" className="hover:text-gray-300">Servicios</a>
    <a href="#" className="hover:text-gray-300">Contacto</a>
  </div>
</nav>
```

### Clase personalizada con @apply

En `src/index.css` o `globals.css`:

```css
@layer components {
  .card {
    @apply bg-red-500 w-40 h-40
           grid place-content-center
           rounded-lg text-white font-bold
           border-2 border-red-600 text-4xl;
  }
}
```

**Uso:**

```jsx
<div className="card">1</div>
<div className="card">2</div>
<div className="card">3</div>
```

---

## Grid

Documentación: [https://tailwindcss.com/docs/grid-template-columns](https://tailwindcss.com/docs/grid-template-columns)

### Grid básico

```jsx
<div className="grid grid-cols-3 gap-4">
  <div className="bg-blue-500 p-4">1</div>
  <div className="bg-blue-500 p-4">2</div>
  <div className="bg-blue-500 p-4">3</div>
  <div className="bg-blue-500 p-4">4</div>
  <div className="bg-blue-500 p-4">5</div>
  <div className="bg-blue-500 p-4">6</div>
</div>
```

### Grid con diferentes columnas

```jsx
// 1 columna
<div className="grid grid-cols-1 gap-4">...</div>

// 2 columnas
<div className="grid grid-cols-2 gap-4">...</div>

// 4 columnas
<div className="grid grid-cols-4 gap-4">...</div>

// 12 columnas (como Bootstrap)
<div className="grid grid-cols-12 gap-4">...</div>
```

### Grid responsive

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* 1 col en móvil, 2 en tablet, 3 en desktop, 4 en pantallas grandes */}
</div>
```

### Span (ocupar múltiples columnas)

```jsx
<div className="grid grid-cols-6 gap-4">
  <div className="col-span-4 bg-blue-500">Ocupa 4 columnas</div>
  <div className="col-span-2 bg-red-500">Ocupa 2 columnas</div>
  <div className="col-span-3 bg-green-500">Ocupa 3 columnas</div>
  <div className="col-span-3 bg-yellow-500">Ocupa 3 columnas</div>
</div>
```

### Grid con filas

```jsx
<div className="grid grid-rows-3 grid-flow-col gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

### Auto-fill y Auto-fit

```jsx
// Auto-fit: se ajusta automáticamente al tamaño del contenedor
<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div className="bg-blue-500 p-4">Card 1</div>
  <div className="bg-blue-500 p-4">Card 2</div>
  <div className="bg-blue-500 p-4">Card 3</div>
</div>
```

### Place items (centrar)

```jsx
<div className="grid grid-cols-3 place-items-center h-64">
  <div>Centrado</div>
  <div>Centrado</div>
  <div>Centrado</div>
</div>
```

### Ejemplo: Galería de imágenes

```jsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <img src="img1.jpg" alt="Image 1" className="w-full h-48 object-cover rounded" />
  <img src="img2.jpg" alt="Image 2" className="w-full h-48 object-cover rounded" />
  <img src="img3.jpg" alt="Image 3" className="w-full h-48 object-cover rounded" />
  <img src="img4.jpg" alt="Image 4" className="w-full h-48 object-cover rounded" />
</div>
```

---

## Dark Mode

Documentación: [https://tailwindcss.com/docs/dark-mode](https://tailwindcss.com/docs/dark-mode)

### Configuración automática (basada en preferencias del sistema)

Por defecto, Tailwind detecta las preferencias del sistema operativo.

```jsx
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Este contenido se adapta al modo oscuro del sistema
</div>
```

### Configuración manual (recomendado)

En `tailwind.config.js`:

```javascript
export default {
  darkMode: 'class', // Habilita el modo manual
  // ... resto de la configuración
}
```

Ahora necesitas añadir la clase `dark` al elemento `<html>` o `<body>`:

```jsx
// En React
function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}
```

### Ejemplo completo: Dark Mode Toggle

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Recuperar preferencia guardada
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mi App
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700
                       hover:bg-gray-300 dark:hover:bg-gray-600
                       transition-colors"
          >
            {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Contenido
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este contenido se adapta automáticamente al modo oscuro.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
```

### Clases útiles para dark mode

```jsx
// Backgrounds
<div className="bg-white dark:bg-gray-900">...</div>

// Texto
<p className="text-gray-900 dark:text-gray-100">...</p>

// Bordes
<div className="border border-gray-300 dark:border-gray-700">...</div>

// Hover states
<button className="hover:bg-gray-100 dark:hover:bg-gray-800">...</button>

// Inputs
<input className="bg-white dark:bg-gray-800 text-black dark:text-white" />
```

---

## Mejores Prácticas

### 1. Usa componentes reutilizables

❌ **No hagas esto:**

```jsx
// Repetir clases en múltiples lugares
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button 1
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button 2
</button>
```

✅ **Haz esto:**

```jsx
// Crear un componente
function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  )
}

// Usar el componente
<Button>Button 1</Button>
<Button>Button 2</Button>
```

### 2. Usa @apply para clases complejas

En `src/index.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
           transition duration-200 ease-in-out transform hover:scale-105;
  }

  .card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6;
  }

  .input-field {
    @apply border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2
           focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
}
```

### 3. Organiza las clases de forma consistente

**Orden recomendado:**
1. Layout (display, position, flex, grid)
2. Sizing (width, height, padding, margin)
3. Typography (font, text)
4. Visual (background, border, shadow)
5. Misc (cursor, transition, animation)

```jsx
<div className="
  flex justify-center items-center
  w-full h-64 p-4 m-2
  text-xl font-bold text-center
  bg-blue-500 rounded-lg shadow-md
  hover:bg-blue-600 transition duration-200
">
  Bien organizado
</div>
```

### 4. Usa el plugin Prettier para ordenar clases

Instala el plugin:

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

Crea `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 5. Extiende el tema en vez de usar valores arbitrarios

❌ **Evita:**

```jsx
<div className="w-[753px] text-[#1a2b3c]">...</div>
```

✅ **Mejor:**

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      width: {
        'custom': '753px',
      },
      colors: {
        'brand-dark': '#1a2b3c',
      }
    },
  },
}
```

```jsx
<div className="w-custom text-brand-dark">...</div>
```

### 6. Usa las utilidades de spacing de forma consistente

Tailwind usa una escala de espaciado predecible:

- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `4` = 1rem (16px)
- `8` = 2rem (32px)
- `16` = 4rem (64px)

```jsx
// Usa múltiplos consistentes
<div className="p-4 m-8 gap-4">...</div>

// Evita valores arbitrarios innecesarios
<div className="p-[17px]">...</div> // ❌
```

---

## Ejercicios Prácticos

### Ejercicio 1: Card de Producto

Crea una card de producto con:
- Imagen
- Título
- Descripción
- Precio
- Botón de compra
- Hover effects

**Resultado esperado:**

```jsx
<div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img
    src="https://via.placeholder.com/400x300"
    alt="Producto"
    className="w-full h-48 object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Nombre del Producto
    </h3>
    <p className="text-gray-600 mb-4">
      Descripción breve del producto que estás vendiendo.
    </p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-blue-600">
        $99.99
      </span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Comprar
      </button>
    </div>
  </div>
</div>
```

### Ejercicio 2: Formulario de Login

Crea un formulario con:
- Email input
- Password input
- Recordarme checkbox
- Botón de submit
- Validación visual

### Ejercicio 3: Navbar Responsive

Crea una navbar que:
- Sea horizontal en desktop
- Se colapse en un menú hamburguesa en móvil
- Tenga dark mode
- Links con hover effects

### Ejercicio 4: Grid de Galería

Crea una galería de imágenes con:
- Grid responsive (1, 2, 3, 4 columnas según el tamaño)
- Hover effect en las imágenes
- Modal al hacer click (opcional)

### Ejercicio 5: Dashboard Layout

Crea un layout de dashboard con:
- Sidebar fijo
- Header superior
- Área de contenido principal
- Grid de cards con estadísticas
- Responsive (sidebar se oculta en móvil)

---

## Recursos Adicionales

### Documentación Oficial

- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Instalación con Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Playground interactivo](https://play.tailwindcss.com/)

### Herramientas útiles

- **Tailwind CSS IntelliSense** - Extensión de VS Code
- **Tailwind UI** - Componentes pre-diseñados (de pago)
- **Headless UI** - Componentes accesibles sin estilos
- **DaisyUI** - Librería de componentes para Tailwind
- **Flowbite** - Componentes open source

### Cheat Sheets

- [Tailwind CSS Cheat Sheet oficial](https://tailwindcomponents.com/cheatsheet/)
- [Nerdcave Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Inspiración

- [Tailwind Components](https://tailwindcomponents.com/)
- [Tailwind Toolbox](https://www.tailwindtoolbox.com/)
- [Tailwind Templates](https://tailwindtemplates.io/)

---

## Conclusión

Tailwind CSS es una herramienta poderosa que te permite:

✅ Desarrollar interfaces rápidamente
✅ Mantener consistencia en el diseño
✅ Crear diseños responsive fácilmente
✅ Personalizar completamente tu sistema de diseño

**Recuerda:**
- Practica creando componentes desde cero
- Consulta la documentación frecuentemente
- Usa las herramientas de desarrollo (extensiones, IntelliSense)
- Experimenta con las utilidades y personalización

---

**¡Feliz codificación!** 🎨

*U-TAD - Desarrollo Web*
