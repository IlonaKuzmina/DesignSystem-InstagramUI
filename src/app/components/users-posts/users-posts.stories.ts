import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { UsersPostsComponent } from './users-posts.component';

export default {
  title: 'Instagram UI/Molecules/ UsersPostsComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [UsersPostsComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div>${storys}</div>`
    ),
  ],
  component: UsersPostsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<UsersPostsComponent> = (args: UsersPostsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
