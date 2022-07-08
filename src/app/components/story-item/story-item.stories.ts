import { Story, Meta } from '@storybook/angular/types-6-0';
import { StoryItemComponent } from './story-item.component';

export default {
  title: 'Instagram UI/Molecules/StoryItemComponent',
  component: StoryItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<StoryItemComponent> = (args: StoryItemComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
