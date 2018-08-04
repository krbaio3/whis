IMPORTANTE
========

Para poner Angular-Material, hay que descomentar las líneas del `core.module.ts`, pero va a dar un fallo que se ha importado una vez la librería `BrowserModule`. Realmente, son las animaciones de Angular-material. Hay que llevar este import `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';` al `app.module.ts`, para que no falle, y quitarlo del modulo `angular-material.module.ts`