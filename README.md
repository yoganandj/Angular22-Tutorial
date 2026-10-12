# Angular22Tutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# What is Directive

In Angular, a directive is a class that adds behaviour to an HTML element or an Angular component. It can change an element's appearance, behaviour, or how content is displayed.

For example, suppose you want to:

Change a paragraph's background colour when the user hovers over it.
Display a message only when a condition is true.
Display a list of students dynamically.
Disable a button based on a condition.

------------------------------------------------------------

 ──────
  ### The 3 Types of Directives

   Type                     | Purpose                                                       | Has Tem… | Examples
  --------------------------|---------------------------------------------------------------|----------|-------------------------------------------------
   1. Components            | Building blocks of the UI with an associated view             |   Yes    | App, Login, Product
   2. Attribute Directives  | Modifies the appearance or behavior of existing elements      |    No    | ngClass, ngStyle, [(ngModel)], RouterLink
   3. Structural Directives | Alters the DOM structure by adding, removing, or replacing    |    No    | *ngIf, *ngFor, *ngComponentOutlet,
                            | elements                                                      |          | *ngTemplateOutlet
  ──────                             |


