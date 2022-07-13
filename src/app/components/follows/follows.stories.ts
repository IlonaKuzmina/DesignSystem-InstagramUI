import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { FollowsComponent } from './follows.component';

export default {
  title: 'Instagram UI/Atoms/FollowsComponent',
  decorators: [
    componentWrapperDecorator(
      (storys: any) => `<div style="display: inline-block">${storys}</div>`
    ),
  ],
  component: FollowsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FollowsComponent> = (args: FollowsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
