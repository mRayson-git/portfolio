import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
