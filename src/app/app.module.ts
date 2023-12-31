import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitProjectsService } from './git-projects.service';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { octBook, octCheckCircle, octEye, octRepo, octRepoClone, octRepoForked, octStar } from '@ng-icons/octicons';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapBootstrapFill, bootstrapBrightnessHighFill, bootstrapCaretUpFill, bootstrapMoonFill } from '@ng-icons/bootstrap-icons';
import { ionLogoAngular, ionLogoCss3, ionLogoDocker, ionLogoHtml5, ionLogoReact } from '@ng-icons/ionicons';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({octRepo, octRepoClone, octRepoForked, octStar, octEye, octCheckCircle,
      bootstrapBrightnessHighFill, bootstrapMoonFill, bootstrapCaretUpFill, bootstrapBootstrapFill, 
      ionLogoCss3, ionLogoHtml5, ionLogoAngular, ionLogoReact, ionLogoDocker, octBook}),
    HttpClientModule
  ],
  providers: [GitProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
