import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PrimaryBlockComponent } from 'src/app/components/primary-block/primary-block.component';
import { StorySectionComponent } from '../../../app/components/story-section/story-section.component';
import { StoryItemComponent } from '../../../app/components/story-item/story-item.component';
import { StoryBtnComponent } from '../../../app/components/story-btn/story-btn.component';
import { PostSectionComponent } from '../../../app/components/post-section/post-section.component';
import { PostComponent } from '../../../app/components/post/post.component';
import { PostHeaderComponent } from '../../../app/components/post-header/post-header.component';
import { PostFooterComponent } from '../../../app/components/post-footer/post-footer.component';

import { SecondaryBlockComponent } from 'src/app/components/secondary-block/secondary-block.component';
import { ProfileComponent } from '../../../app/components/profile/profile.component';
import { SugestionsComponent } from '../../../app/components/sugestions/sugestions.component';
import { FooterComponent } from '../../../app/components/footer/footer.component';
import { FollowsComponent } from '../../../app/components/follows/follows.component';
import { LanguagesListComponent } from '../../../app/components/languages-list/languages-list.component';
import { LinksBlockComponent } from '../../../app/components/links-block/links-block.component';

export default {
  title: 'Instagram UI/Pages/HomeComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        HomeComponent,
        PrimaryBlockComponent,
        StoryItemComponent,
        StoryBtnComponent,
        PostComponent,
        StorySectionComponent,
        PostHeaderComponent,
        PostFooterComponent,
        PostSectionComponent,
        SecondaryBlockComponent,
        ProfileComponent,
        SugestionsComponent,
        FooterComponent,
        FollowsComponent,
        LanguagesListComponent,
        LinksBlockComponent,
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: HomeComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
