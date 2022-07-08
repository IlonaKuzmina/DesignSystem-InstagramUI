import {
    componentWrapperDecorator,
    moduleMetadata,
    Meta,
    Story,
  } from '@storybook/angular';
 import { CommonModule } from '@angular/common';

  import { PostComponent } from './post.component';
  import { PostHeaderComponent } from '../post-header/post-header.component';
  import { PostFooterComponent } from '../post-footer/post-footer.component';
  
  export default {
    title: 'Instagram UI/Organisms/PostComponent',
    decorators: [
      moduleMetadata({
        //👇 Imports both components to allow component composition with Storybook
        declarations: [PostComponent, PostHeaderComponent, PostFooterComponent],
        imports: [CommonModule],
      }),
      //👇 Wraps our stories with a decorator
      componentWrapperDecorator((storys: any) => `<div style="margin: 3em">${storys}</div>`),
    ],
    component: PostComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
  const Template: Story<PostComponent> = (args: PostComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  