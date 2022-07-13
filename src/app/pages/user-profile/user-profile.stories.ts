import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './user-profile.component';
import { ProfileHeaderComponent } from 'src/app/components/profile-header/profile-header.component';
import { StoryComponent } from 'src/app/components/story/story.component';
import { UserToogleComponent } from 'src/app/components/user-toogle/user-toogle.component';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LanguagesListComponent } from 'src/app/components/languages-list/languages-list.component';
import { LinksBlockComponent } from 'src/app/components/links-block/links-block.component';

export default {
  title: 'Instagram UI/Pages/UserProfileComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        UserProfileComponent,
        StoryComponent,
        UserToogleComponent,
        ProfileHeaderComponent,
        FooterComponent,
        LanguagesListComponent,
        LinksBlockComponent,
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="">${storys}</div>`
    ),
  ],
  component: UserProfileComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<UserProfileComponent> = (args: UserProfileComponent) => ({
  props: args,
});

export const WithActiveLink = Template.bind({});
WithActiveLink.parameters = {
  angularRouter: { active: 'profile-posts' },
};

export const Default = Template.bind({});
Default.args = {};
