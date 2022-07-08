import { Story, Meta } from '@storybook/angular/types-6-0';
import { StoryBtnComponent } from './story-btn.component';

export default {
  title: 'Instagram UI/Atoms/StoryBtnComponent',
  component: StoryBtnComponent,
  argTypes: {},
} as Meta;

const Template: Story<StoryBtnComponent> = (args: StoryBtnComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
