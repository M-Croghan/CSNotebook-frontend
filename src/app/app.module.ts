import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudyComponent } from './study/study.component';
import { ExploreComponent } from './explore/explore.component';
import { TopicComponent } from './topic/topic.component';
import { OverviewComponent } from './overview/overview.component';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './register/register.component';
import { AddtopicComponent } from './addtopic/addtopic.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    StudyComponent,
    ExploreComponent,
    TopicComponent,
    OverviewComponent,
    RegisterComponent,
    AddtopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
