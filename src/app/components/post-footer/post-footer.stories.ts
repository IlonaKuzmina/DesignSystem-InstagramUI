import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { PostFooterComponent } from './post-footer.component';
import { PostHeaderComponent } from '../post-header/post-header.component';

export default {
  title: 'Instagram UI/Molecules/PostFooterComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [PostHeaderComponent, PostFooterComponent],
      imports: [CommonModule],
    }),
  ],
  component: PostFooterComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PostFooterComponent> = (args: PostFooterComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
