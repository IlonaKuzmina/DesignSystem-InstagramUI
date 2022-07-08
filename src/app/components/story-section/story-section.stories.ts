import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { StorySectionComponent } from './story-section.component';
import { StoryItemComponent } from '../story-item/story-item.component';
import { StoryBtnComponent } from '../story-btn/story-btn.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Instagram UI/Organisms/StorySectionComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [StorySectionComponent,
        StoryItemComponent,
        StoryBtnComponent,
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: StorySectionComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<StorySectionComponent> = (args: StorySectionComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
