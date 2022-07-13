import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { UserToogleComponent } from './user-toogle.component';

export default {
  title: 'Instagram UI/Molecules/UserToogleComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [UserToogleComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: UserToogleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<UserToogleComponent> = (args: UserToogleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const WithActiveLink = Template.bind({});
WithActiveLink.parameters = {
  angularRouter: { active: 'profile-posts' },
};
