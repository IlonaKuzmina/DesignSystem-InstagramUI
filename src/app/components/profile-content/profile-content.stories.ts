import { Meta, Story } from '@storybook/angular';
import { ProfileContentComponent } from './profile-content.component';

export default {
  title: 'Instagram UI/Molecules/ProfileContentComponent',
  component: ProfileContentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileContentComponent> = (args: ProfileContentComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
