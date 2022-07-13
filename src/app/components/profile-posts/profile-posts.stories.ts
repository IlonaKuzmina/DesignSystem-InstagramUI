import { Meta, Story } from '@storybook/angular';
import { ProfilePostsComponent } from './profile-posts.component';

export default {
  title: 'Instagram UI/Molecules/ProfilePostsComponent',
  component: ProfilePostsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfilePostsComponent> = (args: ProfilePostsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
