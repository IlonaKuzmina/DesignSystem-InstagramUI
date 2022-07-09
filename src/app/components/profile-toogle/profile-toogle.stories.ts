import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ProfileToogleComponent } from './profile-toogle.component';

export default {
  title: 'Instagram UI/Molecules/ProfileToogleComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [ProfileToogleComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: ProfileToogleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileToogleComponent> = (
  args: ProfileToogleComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
