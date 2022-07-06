import { Story, Meta } from '@storybook/angular/types-6-0';
import { StoryComponent } from '../app/components/story/story.component';

export default {
  title: 'Components/StoryComponent',
  component: StoryComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

const Template: Story<StoryComponent> = (args: StoryComponent) => ({
    props: args,
})

export const Dark = Template.bind({});
Dark.args = {

}

export const Light = Template.bind({});
Light.args = {
    
}