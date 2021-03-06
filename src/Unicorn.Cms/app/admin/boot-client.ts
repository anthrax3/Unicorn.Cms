import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
require('zone.js');
import '../styles/site.css';

import { provideRouter } from '@ngrx/router';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormBuilder } from '@angular/common';
import * as router from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { App, routes } from './app';

bootstrap(App, [
  router.ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  FormBuilder,
  ...provideRouter(routes)
]);

// Basic hot reloading support. Automatically reloads and restarts the Angular 2 app each time
// you modify source files. This will not preserve any application state other than the URL.
declare var module: any;
if (module.hot) {
  module.hot.accept();
}
