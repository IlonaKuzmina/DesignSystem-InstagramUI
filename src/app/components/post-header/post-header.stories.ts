import { Meta, Story } from '@storybook/angular';
import { PostHeaderComponent } from './post-header.component';

export default {
  title: 'Instagram UI/Molecules/PostHeaderComponent',
  component: PostHeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PostHeaderComponent> = (args: PostHeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
