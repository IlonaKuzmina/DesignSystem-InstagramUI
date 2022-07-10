import {
    componentWrapperDecorator,
    moduleMetadata,
    Meta,
    Story,
  } from '@storybook/angular';
  import { CommonModule } from '@angular/common';
  
import { SugestionsComponent } from './sugestions.component';
import { FollowsComponent } from '../follows/follows.component';
  
  export default {
    title: 'Instagram UI/Organisms/SugestionsComponent',
    decorators: [
      moduleMetadata({
        //👇 Imports both components to allow component composition with Storybook
        declarations: [
          SugestionsComponent, FollowsComponent
        ],
        imports: [CommonModule],
      }),
      //👇 Wraps our stories with a decorator
      componentWrapperDecorator(
        (storys: any) => `<div style="margin: 3em">${storys}</div>`
      ),
    ],
    component: SugestionsComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;
  
  const Template: Story<SugestionsComponent> = (
    args: SugestionsComponent
  ) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  