import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { NavigationComponent } from './navigation.component';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

export default {
  title: 'Instagram UI/Organisms/NavigationComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [NavigationComponent, LogoComponent, NavMenuComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator((storys: any) => `<div>${storys}</div>`),
  ],
  component: NavigationComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
