import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFeedComponent } from './components/admin-feed/admin-feed.component';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { VotingTabComponent } from './components/voting-tab/voting-tab.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'landing',
        component: AdminLandingPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'voting',
        component: VotingTabComponent,
        pathMatch: 'full',
      },
      {
        path: 'feed',
        component: AdminFeedComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
