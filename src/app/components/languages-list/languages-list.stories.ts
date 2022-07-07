import { Meta, Story } from '@storybook/angular/types-6-0';
import { LanguagesListComponent } from './languages-list.component';

export default {
  title: 'Instagram UI/Atoms/LanguagesListComponent',
  component: LanguagesListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LanguagesListComponent> = (args: LanguagesListComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
