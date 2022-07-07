import { Meta, Story } from '@storybook/angular/types-6-0';
import { LinksBlockComponent } from './links-block.component';

export default {
  title: 'Instagram UI/Atoms/LinksBlockComponent',
  component: LinksBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LinksBlockComponent> = (args: LinksBlockComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
