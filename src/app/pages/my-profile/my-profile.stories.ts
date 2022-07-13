import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { MyProfileComponent } from './my-profile.component';
import { ProfileHeaderComponent } from 'src/app/components/profile-header/profile-header.component';
import { ProfileToogleComponent } from 'src/app/components/profile-toogle/profile-toogle.component';
import { ProfilePostsComponent } from 'src/app/components/profile-posts/profile-posts.component';
import { ProfileSavedComponent } from 'src/app/components/profile-saved/profile-saved.component';
import { ProfileTaggedComponent } from 'src/app/components/profile-tagged/profile-tagged.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LanguagesListComponent } from 'src/app/components/languages-list/languages-list.component';
import { LinksBlockComponent } from 'src/app/components/links-block/links-block.component';

export default {
  title: 'Instagram UI/Pages/MyProfileComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        MyProfileComponent,
        ProfileSavedComponent,
        ProfilePostsComponent,
        ProfileToogleComponent,
        ProfileHeaderComponent,
        ProfileTaggedComponent,
        FooterComponent,
        LanguagesListComponent,
        LinksBlockComponent 
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: MyProfileComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MyProfileComponent> = (args: MyProfileComponent) => ({
  props: args,
});

export const WithActiveLink = Template.bind({});
WithActiveLink.parameters = {
    angularRouter: {active: 'profile-posts'}
};

export const Default = Template.bind({});
Default.args = {};
