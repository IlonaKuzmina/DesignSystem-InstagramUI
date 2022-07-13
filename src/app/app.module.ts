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
import { PostSectionComponent } from './components/post-section/post-section.component';
import { PostFooterComponent } from './components/post-footer/post-footer.component';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileToogleComponent } from './components/profile-toogle/profile-toogle.component';
import { MessengerContentRightComponent } from './components/messenger-content-right/messenger-content-right.component';
import { MessengerContentLeftComponent } from './components/messenger-content-left/messenger-content-left.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { ProfilePostsComponent } from './components/profile-posts/profile-posts.component';
import { ProfileSavedComponent } from './components/profile-saved/profile-saved.component';
import { ProfileTaggedComponent } from './components/profile-tagged/profile-tagged.component';
import { UserToogleComponent } from './components/user-toogle/user-toogle.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserGuidesComponent } from './components/user-guides/user-guides.component';
import { UserReelsComponent } from './components/user-reels/user-reels.component';
import { UserVideosComponent } from './components/user-videos/user-videos.component';
import { UserTaggedComponent } from './components/user-tagged/user-tagged.component';
import { NextBtnDirective } from './next-btn.directive';

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
    FollowsComponent,
    PostSectionComponent,
    PostFooterComponent,
    PostHeaderComponent,
    ProfileHeaderComponent,
    ProfileToogleComponent,
    MessengerContentRightComponent,
    MessengerContentLeftComponent,
    UsersPostsComponent,
    ProfilePostsComponent,
    ProfileSavedComponent,
    ProfileTaggedComponent,
    UserToogleComponent,
    UserPostsComponent,
    UserGuidesComponent,
    UserReelsComponent,
    UserVideosComponent,
    UserTaggedComponent,
    NextBtnDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
