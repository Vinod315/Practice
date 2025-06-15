import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { routes } from '../Practice/src/app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
