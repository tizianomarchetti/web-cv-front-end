import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { EducationComponent } from './component/pages/education/education.component';
import { ExperienceComponent } from './component/pages/experience/experience.component';
import { SkillComponent } from './component/pages/skill/skill.component';
import { ContactComponent } from './component/pages/contact/contact.component';


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
    component: EducationComponent,
  },
  /** experience */
  {
    path: "experience",
    component: ExperienceComponent,
  },
  /** skills */
  {
    path: "skills",
    component: SkillComponent,
  },
  /** contact */
  {
    path: "contact",
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
