import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { RegisterComponent } from './register/register.component';
import { StudyComponent } from './study/study.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'study',
    component: StudyComponent,
    children: [
      {
        path: 'topics',
        component: TopicComponent,
      },
      {
        path: 'topics/:topicName',
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
