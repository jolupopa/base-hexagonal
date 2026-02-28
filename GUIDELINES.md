# 🌌 Antigravity Development Guidelines (Hexagonal Edition)

Este documento rige la construcción del CRM Inmobiliario, garantizando una base modular, desacoplada y **SaaS-Ready** desde el primer día.

---

## 🏗️ 1. Estructura Hexagonal Modular
Para maximizar la cohesión y el aislamiento, el código se organiza en **Módulos** dentro de `app/Modules/`. Cada módulo es una unidad funcional con sus propias capas:

- **Core (`app/Core/`)**: Cimientos técnicos compartidos (`BaseModel`, `BaseAction`, `BaseResource`).
- **Domain (`app/Modules/[Modulo]/Domain/`)**: Modelos y reglas de negocio puras.
- **Application (`app/Modules/[Modulo]/Application/`)**: **Actions** de responsabilidad única que ejecutan la lógica de negocio.
- **Infrastructure (`app/Modules/[Modulo]/Infrastructure/`)**: Repositorios y adaptadores de persistencia.
- **Presentation (`app/Modules/[Modulo]/Presentation/`)**: Controladores invokables y Resources de Inertia.

---

## ⚖️ 2. Convenciones de Nombres (Naming Protocol)
El nombre debe revelar qué hace el archivo y en qué capa del hexágono reside.

- **Actions**: `[Accion][Entidad]Action` (ej. `CreatePropertyAction`). Heredan de `BaseAction`.
- **Controllers**: Invokables `[Entidad][Accion]Controller` (ej. `PropertyStoreController`).
- **Resources**: `[Entidad]Resource`. Heredan de `BaseResource` para filtrado de datos.
- **Models**: Singular PascalCase (ej. `Company`). Todos deben usar **UUID**.
- **Frontend**: Componentes y Pages en `resources/js/Modules/[Modulo]/` usando PascalCase.

---

## 🧪 3. Disciplina TDD (The Iron Law)
**"No production code without a failing test first."**

1. **Rojo**: Escribir un test de integración o arquitectura (Pest) que falle.
2. **Verde**: Escribir el código mínimo necesario para pasar el test.
3. **Refactor**: Mejorar el código manteniendo los tests en verde.
*Auditoría de Arquitectura: Los archivos fuera de la estructura de capas definida serán eliminados automáticamente.*

---

## 🚀 4. SaaS & Multi-tenant Readiness (The UUID Rule)
Para que el sistema sea escalable a multi-empresa sin reescritura:

- **Identidad**: Queda prohibido el uso de IDs incrementales. Se debe usar obligatoriamente `$table->uuid('id')->primary()`.
- **Company Core**: Todas las tablas de negocio deben incluir una relación foránea `company_id` (UUID).
- **BaseModel**: Todos los modelos deben extender de `App\Core\BaseModel` para heredar la gestión de UUID y aislamiento futuro.

---

## 🧹 5. Clean Code y Desacoplamiento
- **Thin Controllers**: Los controladores solo orquestan. La lógica vive 100% en las **Actions**.
- **Data Firewall**: Prohibido pasar modelos Eloquent directos al frontend. Uso obligatorio de **Resources** para evitar fugas de datos.
- **Wayfinder**: Uso exclusivo de la librería Wayfinder para rutas en el frontend. Prohibido usar strings planos para URLs.

---

## 🔐 6. Seguridad y Rendimiento
- **Selective Retrieval**: Usar `select()` en Eloquent para evitar columnas innecesarias.
- **Preload (Eager Loading)**: Prohibido el problema N+1; usar siempre `with()` o `load()`.
- **Sensitive Data**: Jamás exponer `password`, `internal_id` o `company_id` interno en las respuestas JSON hacia el frontend.