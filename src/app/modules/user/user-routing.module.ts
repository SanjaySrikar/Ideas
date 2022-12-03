import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MyIdeasComponent } from './components/my-ideas/my-ideas.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'landing', pathMatch: 'full', component: LandingPageComponent },
      { path: 'idea/:id', pathMatch: 'full', component: CreateIdeaComponent },
      { path: 'my-ideas', pathMatch: 'full' ,component: MyIdeasComponent },
      { path: '', pathMatch: 'full', redirectTo: 'landing' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
