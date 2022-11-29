import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { UserModule } from "../user/user.module";
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import { VotingStatusComponent } from './components/voting-status/voting-status.component';



@NgModule({
    declarations: [
        AdminComponent,
        AdminLandingPageComponent,
        AdminNavBarComponent,
        VotingStatusComponent,

    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        UserModule
    ]
})
export class AdminModule { }
