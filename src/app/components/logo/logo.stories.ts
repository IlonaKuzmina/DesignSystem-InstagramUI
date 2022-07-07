import { Meta, Story } from '@storybook/angular/types-6-0';
import { LogoComponent } from './logo.component';

export default {
  title: 'Instagram UI/Atoms/LogoComponent',
  component: LogoComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
