import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { EducationComponent } from './component/pages/education/education.component';
import { ExperienceComponent } from './component/pages/experience/experience.component';
import { SkillComponent } from './component/pages/skill/skill.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { FormComponent } from './component/common/form/form/form.component';
import { ModaleComponent } from './component/common/form/modale/modale.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    ContactComponent,
    FormComponent,
    ModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}