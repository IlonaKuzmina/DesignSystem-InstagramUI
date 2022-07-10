import { Meta, Story } from '@storybook/angular/types-6-0';
import { MessengerContentRightComponent } from './messenger-content-right.component';

export default {
  title: 'Instagram UI/Molecules/MessengerContentRightComponent',
  component: MessengerContentRightComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MessengerContentRightComponent> = (args: MessengerContentRightComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
