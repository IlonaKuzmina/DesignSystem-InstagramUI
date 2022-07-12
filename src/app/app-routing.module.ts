import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePostsComponent } from './components/profile-posts/profile-posts.component';
import { ProfileSavedComponent } from './components/profile-saved/profile-saved.component';
import { ProfileTaggedComponent } from './components/profile-tagged/profile-tagged.component';
import { UserGuidesComponent } from './components/user-guides/user-guides.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserReelsComponent } from './components/user-reels/user-reels.component';
import { UserTaggedComponent } from './components/user-tagged/user-tagged.component';
import { UserVideosComponent } from './components/user-videos/user-videos.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    children: [
      { path: '', redirectTo: 'profile-posts', pathMatch: 'full' },
      {
        path: 'profile-posts',
        component: ProfilePostsComponent,
      },
      {
        path: 'profile-saved',
        component: ProfileSavedComponent,
      },
      {
        path: 'profile-tagged',
        component: ProfileTaggedComponent,
      },
    ],
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'messenger',
    component: MessengerComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    children: [
      { path: '', redirectTo: 'user-posts', pathMatch: 'full' },
      {
        path: 'user-posts',
        component: UserPostsComponent,
      },
      {
        path: 'user-guides',
        component: UserGuidesComponent,
      },
      {
        path: 'user-reels',
        component: UserReelsComponent,
      },
      {
        path: 'user-videos',
        component: UserVideosComponent,
      },
      {
        path: 'user-tagged',
        component: UserTaggedComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
