import {
    componentWrapperDecorator,
    moduleMetadata,
    Meta,
    Story,
  } from '@storybook/angular';
import { CommonModule } from '@angular/common';

  import { PrimaryBlockComponent } from './primary-block.component';
  import { StorySectionComponent } from '../story-section/story-section.component';
  import { PostSectionComponent } from '../post-section/post-section.component';

  
  export default {
    title: 'Instagram UI/Organisms/PrimaryBlockComponent',
    decorators: [
      moduleMetadata({
        //👇 Imports both components to allow component composition with Storybook
        declarations: [PrimaryBlockComponent, StorySectionComponent, PostSectionComponent],
        imports: [CommonModule],
      }),
      //👇 Wraps our stories with a decorator
      componentWrapperDecorator((storys: any) => `<div style="margin: 3em">${storys}</div>`),
    ],
    component: PrimaryBlockComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
  const Template: Story<PrimaryBlockComponent> = (args: PrimaryBlockComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  