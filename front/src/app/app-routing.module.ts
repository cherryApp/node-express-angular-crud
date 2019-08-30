import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '', 
    component: IndexComponent
  },
  {
    path: 'users', 
    component: UsersComponent
  },
  {
    path: '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
