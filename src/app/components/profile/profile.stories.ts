import { componentWrapperDecorator } from '@storybook/angular';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';

export default {
  title: 'Instagram UI/Molecules/ProfileComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [ProfileComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(
      (storys: any) => `<div style="display: inline-block">${storys}</div>`
    ),
  ],
  component: ProfileComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileComponent> = (args: ProfileComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
