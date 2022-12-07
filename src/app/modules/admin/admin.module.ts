import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { UserModule } from '../user/user.module';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import { AdminIdeaListComponent } from './components/admin-idea-list/admin-idea-list.component';
import { AdminFeedComponent } from './components/admin-feed/admin-feed.component';
import { AddTopicsComponent } from './components/add-topics/add-topics.component';
import { FormsModule } from '@angular/forms';
import { CollapseCardComponent } from './components/collapse-card/collapse-card.component';
import { VotingTabComponent } from './components/voting-tab/voting-tab.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLandingPageComponent,
    AdminNavBarComponent,
    AdminIdeaListComponent,
    AdminFeedComponent,
    AddTopicsComponent,
    CollapseCardComponent,
    VotingTabComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, UserModule],
  exports: [VotingTabComponent],
})
export class AdminModule {}
