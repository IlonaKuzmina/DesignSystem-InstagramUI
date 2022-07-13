import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ProfileHeaderComponent } from './profile-header.component';
import { PostHeaderComponent } from '../post-header/post-header.component';

export default {
  title: 'Instagram UI/Molecules/ProfileHeaderComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [PostHeaderComponent, ProfileHeaderComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="">${storys}</div>`
    ),
  ],
  component: ProfileHeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileHeaderComponent> = (
  args: ProfileHeaderComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
