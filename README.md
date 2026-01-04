# 🅰️ Angular Ejercicios

<div align="center">

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Una colección completa de ejercicios prácticos para dominar **Angular** desde los fundamentos hasta conceptos avanzados.

[Ejercicios](#-ejercicios-destacados) • [Instalación](#-instalación-y-ejecución) • [Tecnologías](#️-tecnologías-utilizadas)

---

</div>

## 📖 Acerca del Proyecto

Este repositorio contiene una serie de ejercicios progresivos diseñados para demostrar y afianzar el dominio de los conceptos fundamentales de **Angular**. Desde la manipulación del DOM y directivas hasta la gestión de formularios y lógica compleja de componentes, cada ejercicio está cuidadosamente estructurado para ofrecer aprendizaje incremental.

---

## 🎯 Ejercicios Destacados

### 🎨 Ejercicio 01: Directivas y Atributos Dinámicos

<details>
<summary><strong>Ver detalles</strong></summary>

Aplicación introductoria enfocada en la manipulación dinámica de estilos y clases CSS.

**📋 Funcionalidad:**
- 🎨 Cambio dinámico de clases CSS
- 📏 Control de estilos en línea (tamaño de fuente)
- 🔄 Binding bidireccional de `className`
- ⚡ Actualización reactiva de la UI

**💡 Conceptos clave:**
- Property Binding
- Class Binding
- Style Binding
- **Signals** (Angular moderno)
- Componentes Standalone
- Directivas estructurales

**📂 Carpeta:** [`ejercicio_01`](ejercicio_01)

</details>

---

### 👥 Ejercicio 05: Gestión de Empleados (CRUD Básico)

<details>
<summary><strong>Ver detalles</strong></summary>

Sistema completo de registro y gestión de empleados con operaciones CRUD.

**📋 Funcionalidad:**
- ➕ Registro de nuevos empleados
- 📋 Visualización de lista de empleados
- 🗑️ Eliminación de registros
- ✏️ Edición de datos (opcional)
- ✅ Validación de formularios

**💡 Conceptos clave:**
- Modelos de datos (Clases TypeScript)
- **Two-way data binding** con `[(ngModel)]`
- FormsModule
- Renderizado de listas con `*ngFor`
- Validaciones de formularios
- Manejo de eventos
- Gestión de estado en componentes

**📂 Carpeta:** [`ejercicio_05`](ejercicio_05)

</details>

---

### 🔢 Ejercicio 09: Calculadora Funcional

<details>
<summary><strong>Ver detalles</strong></summary>

Calculadora interactiva con operaciones matemáticas completas.

**📋 Funcionalidad:**
- ➕ Operaciones básicas: suma, resta, multiplicación, división
- √ Cálculo de raíz cuadrada
- 🔢 Manejo de números decimales
- 🧹 Limpieza de pantalla (Clear)
- 🔄 Gestión de estado de operaciones
- ⚠️ Manejo de errores (división por cero)

**💡 Conceptos clave:**
- Lógica de componentes compleja
- Event Binding
- Control de flujo con `switch`
- Manejo de estado local
- Interpolación de datos
- Type Safety con TypeScript
- Operaciones matemáticas avanzadas

**📂 Carpeta:** [`ejercicio_09`](ejercicio_09)

</details>

---

### 📚 Ejercicios Adicionales

<table>
<tr>
<td align="center">
<strong>Ejercicio 02</strong><br/>
Directivas Estructurales
</td>
<td align="center">
<strong>Ejercicio 03</strong><br/>
Data Binding
</td>
<td align="center">
<strong>Ejercicio 04</strong><br/>
Event Handling
</td>
</tr>
<tr>
<td align="center">
<strong>Ejercicio 06</strong><br/>
Componentes Anidados
</td>
<td align="center">
<strong>Ejercicio 07</strong><br/>
Servicios e Inyección
</td>
<td align="center">
<strong>Ejercicio 08</strong><br/>
Routing Básico
</td>
</tr>
</table>

> 💡 **Cada ejercicio incluye:** Código comentado, ejemplos prácticos y documentación específica.

---

## 🛠️ Tecnologías Utilizadas

<table>
<tr>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" width="60" height="60" alt="Angular"/>
<br/><br/>
<strong>Angular 18+</strong>
<br/>
<sub>Framework frontend con arquitectura Standalone y soporte para Signals</sub>
</td>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="60" height="60" alt="TypeScript"/>
<br/><br/>
<strong>TypeScript 5.0+</strong>
<br/>
<sub>Superset de JavaScript con tipado estático para desarrollo robusto</sub>
</td>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="60" height="60" alt="CSS3"/>
<br/><br/>
<strong>CSS3</strong>
<br/>
<sub>Estilos nativos modernos sin dependencias externas</sub>
</td>
</tr>
</table>

### Herramientas Complementarias

- 📦 **NPM** - Gestión de paquetes y dependencias
- 🔧 **Angular CLI** - Herramientas de desarrollo y scaffolding
- 🎨 **Angular Material** (opcional en algunos ejercicios)
- 🔥 **RxJS** - Programación reactiva

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

| Herramienta | Versión Mínima | Link de Descarga |
|-------------|----------------|------------------|
| 🟢 Node.js | 18.x o superior | [Descargar](https://nodejs.org/) |
| 📦 npm | 9.x o superior | Incluido con Node.js |
| 🅰️ Angular CLI | 18.x | `npm install -g @angular/cli` |

**Verificar instalaciones:**
```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación y Ejecución

Cada ejercicio funciona como un proyecto independiente de Angular, por lo que debes configurar cada uno por separado.

### Configuración General

**1️⃣ Clonar el repositorio:**
```bash
git clone https://github.com/jeremialex04/angular-ejercicios.git
cd angular-ejercicios
```

### Ejecutar un Ejercicio Específico

**2️⃣ Navegar a la carpeta del ejercicio:**
```bash
cd ejercicio_01  # O el número del ejercicio que desees
```

**3️⃣ Instalar dependencias:**
```bash
npm install
```

> ⏱️ **Tiempo estimado:** 2-3 minutos dependiendo de tu conexión

**4️⃣ Iniciar el servidor de desarrollo:**
```bash
ng serve
```

O para abrir automáticamente en el navegador:
```bash
ng serve --open
```

**5️⃣ Acceder a la aplicación:**

La aplicación estará disponible en:
```
🌐 http://localhost:4200/
```

### Comandos Útiles por Ejercicio
```bash
# Compilar para producción
ng build --configuration production

# Ejecutar tests unitarios
ng test

# Ejecutar tests e2e
ng e2e

# Generar nuevo componente (si deseas extender)
ng generate component nombre-componente

# Verificar linting
ng lint
```

---

## 📂 Estructura del Repositorio
```
angular-ejercicios/
│
├── 📁 ejercicio_01/          # Directivas y Atributos Dinámicos
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   └── app.component.css
│   │   └── main.ts
│   ├── angular.json
│   └── package.json
│
├── 📁 ejercicio_02/          # [Descripción del ejercicio]
├── 📁 ejercicio_03/          # [Descripción del ejercicio]
├── 📁 ejercicio_04/          # [Descripción del ejercicio]
│
├── 📁 ejercicio_05/          # Gestión de Empleados (CRUD)
│   ├── src/
│   │   ├── app/
│   │   │   ├── models/
│   │   │   │   └── empleados.ts
│   │   │   ├── app.component.ts
│   │   │   └── app.component.html
│   │   └── main.ts
│   └── package.json
│
├── 📁 ejercicio_06/          # [Descripción del ejercicio]
├── 📁 ejercicio_07/          # [Descripción del ejercicio]
├── 📁 ejercicio_08/          # [Descripción del ejercicio]
│
├── 📁 ejercicio_09/          # Calculadora Funcional
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   └── app.component.css
│   │   └── main.ts
│   └── package.json
│
└── 📄 README.md
```

---

## 📚 Roadmap de Aprendizaje
```
🎯 Nivel Básico
   ├─ Ejercicio 01: Directivas y Binding
   ├─ Ejercicio 02: Estructuras de Control
   ├─ Ejercicio 03: Data Binding
   └─ Ejercicio 04: Event Handling

🎯 Nivel Intermedio
   ├─ Ejercicio 05: Formularios y CRUD
   ├─ Ejercicio 06: Componentes Anidados
   ├─ Ejercicio 07: Servicios
   └─ Ejercicio 08: Routing

🎯 Nivel Avanzado
   └─ Ejercicio 09: Lógica Compleja (Calculadora)
```

---

## 🎓 Conceptos Cubiertos

### Core Concepts

- ✅ **Components** - Arquitectura basada en componentes
- ✅ **Templates** - Sintaxis de plantillas de Angular
- ✅ **Directives** - Directivas estructurales y de atributo
- ✅ **Data Binding** - One-way y Two-way binding
- ✅ **Dependency Injection** - Inyección de dependencias
- ✅ **Services** - Servicios reutilizables
- ✅ **Routing** - Navegación entre vistas
- ✅ **Forms** - Template-driven y Reactive Forms

### Modern Angular Features

- 🆕 **Standalone Components** - Nueva arquitectura sin módulos
- 🆕 **Signals** - Sistema de reactividad moderno
- 🆕 **Typed Forms** - Formularios con tipado estricto

---

## 🤝 Contribuciones

¿Tienes ideas para nuevos ejercicios o mejoras? ¡Las contribuciones son bienvenidas!

### Cómo Contribuir

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu ejercicio (`git checkout -b ejercicio/nuevo-concepto`)
3. 💾 Commit tus cambios (`git commit -m 'Add: Ejercicio sobre [concepto]'`)
4. 📤 Push a la rama (`git push origin ejercicio/nuevo-concepto`)
5. 🔀 Abre un Pull Request

### Guías para Nuevos Ejercicios

- Incluir comentarios explicativos en el código
- Agregar un README.md específico en la carpeta del ejercicio
- Mantener la estructura de archivos consistente
- Documentar los conceptos cubiertos

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🔗 Enlaces Útiles

- 📖 [Documentación Oficial de Angular](https://angular.io/docs)
- 🎓 [Angular CLI Documentation](https://angular.io/cli)
- 💬 [Angular Community](https://community.angular.io/)
- 🎥 [Angular YouTube Channel](https://www.youtube.com/angular)

---

## 📧 Contacto

**Autor:** Jeremias Alexander

- 🐱 GitHub: [@jeremialex04](https://github.com/jeremialex04)
- 📬 Issues: [Reportar problema](https://github.com/jeremialex04/angular-ejercicios/issues)

---

## 🙏 Agradecimientos

- **Angular Team** - Por el increíble framework
- **TypeScript Team** - Por el lenguaje tipado
- **Comunidad Angular** - Por los recursos y soporte

---

<div align="center">

**Desarrollado con 💙 para la comunidad de Angular**

⭐ Si este repositorio te ayudó en tu aprendizaje, ¡considera darle una estrella!

---

[⬆ Volver arriba](#️-angular-ejercicios)

</div>
