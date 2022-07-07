import { Meta, Story } from '@storybook/angular';
import { NavMenuComponent } from './nav-menu.component';

export default {
  title: 'Instagram UI/Molecules/NavMenuComponent',
  component: NavMenuComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavMenuComponent> = (args: NavMenuComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
