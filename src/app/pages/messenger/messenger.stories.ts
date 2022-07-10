import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { MessengerComponent } from './messenger.component';
import { MessengerContentRightComponent } from 'src/app/components/messenger-content-right/messenger-content-right.component';
import { MessengerContentLeftComponent } from 'src/app/components/messenger-content-left/messenger-content-left.component';

export default {
  title: 'Instagram UI/Pages/MessengerComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        MessengerComponent,
        MessengerContentRightComponent,
        MessengerContentLeftComponent,
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: MessengerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MessengerComponent> = (args: MessengerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
