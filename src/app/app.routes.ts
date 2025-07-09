import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './components/register/register.component';
import { UlterComponent } from './components/ulter/ulter.component';
export const routes: Routes = [
 
  { path: 'todos', component: TodosComponent, title: 'Todos' },
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: '', component: UlterComponent, title: 'Home' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }