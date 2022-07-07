import { Story, Meta } from '@storybook/angular/types-6-0';
import { HomeComponent } from './home.component';

export default {
  title: 'Instagram UI/Pages/HomeComponent',
  component: HomeComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
    props: args,
})

export const Dark = Template.bind({});
Dark.args = {

}