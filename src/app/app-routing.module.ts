import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbountComponent } from './abount/abount.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abount', component: AbountComponent },
  { path: 'contact', loadChildren: () => import("./shared/shared.module").then(x => x.SharedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
