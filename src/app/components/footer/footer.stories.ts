import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { LinksBlockComponent } from '../links-block/links-block.component';
import { LanguagesListComponent } from '../languages-list/languages-list.component';

export default {
  title: 'Instagram UI/Organisms/FooterComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FooterComponent, LinksBlockComponent, LanguagesListComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator((storys: any) => `<div style="margin: 3em">${storys}</div>`),
  ],
  component: FooterComponent,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
    props: args,
})

export const Dark = Template.bind({});
Dark.args = {

}