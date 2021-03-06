import { Story, Meta } from '@storybook/angular/types-6-0';
import { StoryComponent } from './story.component';

export default {
  title: 'Instagram UI/Molecules/StoryComponent',
  component: StoryComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<StoryComponent> = (args: StoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
