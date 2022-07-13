import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { UserPostsComponent } from './user-posts.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguagesListComponent } from '../languages-list/languages-list.component';
import { LinksBlockComponent } from '../links-block/links-block.component';

export default {
  title: 'Instagram UI/Organisms/UserPostsComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        UserPostsComponent,
        FooterComponent,
        LinksBlockComponent,
        LanguagesListComponent,
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="display:inline-block">${storys}</div>`
    ),
  ],
  component: UserPostsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<UserPostsComponent> = (args: UserPostsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
