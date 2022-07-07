import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './components/story/story.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LinksBlockComponent } from './components/links-block/links-block.component';
import { LanguagesListComponent } from './components/languages-list/languages-list.component';
import { PostComponent } from './components/post/post.component';
import { StorySectionComponent } from './components/story-section/story-section.component';
import { PrimaryBlockComponent } from './components/primary-block/primary-block.component';
import { SecondaryBlockComponent } from './components/secondary-block/secondary-block.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SugestionsComponent } from './components/sugestions/sugestions.component';
import { FollowsComponent } from './components/follows/follows.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    NavigationComponent,
    HomeComponent,
    MessengerComponent,
    MyProfileComponent,
    UserProfileComponent,
    ExploreComponent,
    FooterComponent,
    LogoComponent,
    NavMenuComponent,
    LinksBlockComponent,
    LanguagesListComponent,
    PostComponent,
    StorySectionComponent,
    PrimaryBlockComponent,
    SecondaryBlockComponent,
    ProfileComponent,
    SugestionsComponent,
    FollowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
