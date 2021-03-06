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
import { AddtopicComponent } from './addtopic/addtopic.component';
import { DeleteTopicComponent } from './delete-topic/delete-topic.component';
import { CustomTopicsComponent } from './custom-topics/custom-topics.component';
import { UpdateTopicComponent } from './update-topic/update-topic.component';
import { CustomOverviewComponent } from './custom-overview/custom-overview.component';

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
      },
      {
        path: 'addTopic',
        component: AddtopicComponent
      },
      {
        path: 'deleteTopic',
        component: DeleteTopicComponent
      },
      {
        path: 'myTopics',
        component: CustomTopicsComponent
      },
      {
        path: 'myTopics/:customTopicName',
        component: CustomOverviewComponent
      },
      {
        path: 'updateTopic',
        component: UpdateTopicComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
