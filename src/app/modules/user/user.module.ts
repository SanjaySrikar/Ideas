import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SortByStringPipe } from 'src/app/modules/user/pipes/sort-by-string.pipe';
import { FormsModule } from '@angular/forms';
import { CreateIdeaComponent } from './components/create-idea/create-idea.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { IdeaComponent } from './components/idea/idea.component';
import { MyIdeasComponent } from './components/my-ideas/my-ideas.component';
import { IdeaFeedComponent } from './components/idea-feed/idea-feed.component';
import { UserComponent } from './components/user/user.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent,
    SortByStringPipe,
    CreateIdeaComponent,
    IdeaComponent,
    MyIdeasComponent,
    IdeaFeedComponent,
    UserComponent,
    IdeaCardComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule,
    RichTextEditorAllModule
  ]
})
export class UserModule { }
