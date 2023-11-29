import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';


const routes: Routes = [
  /** home */
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    /**
     * La radice della single page application è stabilita al componente HomeComponent
     */
    path: "",
    component: HomeComponent,
  },
  /** education */
  {
    path: "education",
    component: HomeComponent,
  },
  /** experience */
  {
    path: "experience",
    component: HomeComponent,
  },
  /** skills */
  {
    path: "skills",
    component: HomeComponent,
  },
  /** contact */
  {
    path: "contact",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
