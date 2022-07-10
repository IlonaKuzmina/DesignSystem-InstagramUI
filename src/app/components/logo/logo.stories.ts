import { Meta, Story } from '@storybook/angular/types-6-0';
import { reduce } from 'rxjs';
import { LogoComponent } from './logo.component';

export default {
  title: 'Instagram UI/Atoms/LogoComponent',
  component: LogoComponent,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
