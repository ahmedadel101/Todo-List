import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './modules/shared/component/layout/admin-layout/admin-layout.component';
import { UsersLayoutComponent } from './modules/shared/component/layout/users-layout/users-layout.component';
import { BlankLayoutComponent } from './modules/shared/component/layout/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './modules/shared/component/layout/auth-layout/auth-layout.component';


const routes: Routes = [
  {path:"admin" , component: AdminLayoutComponent,
  children:[
    {
      path:"posts" , loadChildren:()=> import('./modules/view/posts/posts.module').then(p => p.PostsModule)
    }
  ]
},
  {path:"users" , component: UsersLayoutComponent,
  children:[
    {
      path: "notes" , loadChildren:()=> import('./modules/view/notes/notes.module').then(m => m.NotesModule)
    }
  ]
},
  {path:"blank" , component: BlankLayoutComponent,
},
  {path:"auth"  , component: AuthLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
