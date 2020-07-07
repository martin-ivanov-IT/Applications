import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ApplicationsListComponent } from './pages/applications-list/applications-list.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';


const routes: Routes = [
  {path: '', component:MainLayoutComponent, children:[
    {path:'', component: ApplicationsListComponent},
    {path: 'new', component:ApplicationDetailsComponent},
    {path: ':id', component:ApplicationDetailsComponent},


   

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
