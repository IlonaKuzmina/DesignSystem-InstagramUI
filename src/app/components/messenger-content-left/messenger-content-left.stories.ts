import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { MessengerContentLeftComponent } from './messenger-content-left.component';

export default {
  title: 'Instagram UI/Molecules/MessengerContentLeftComponent',
  decorators: [
    componentWrapperDecorator(
      (storys: any) => `<div style="display: inline-block">${storys}</div>`
    ),
  ],
  component: MessengerContentLeftComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MessengerContentLeftComponent> = (
  args: MessengerContentLeftComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
