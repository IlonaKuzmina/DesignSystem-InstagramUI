import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { SecondaryBlockComponent } from './secondary-block.component';
import { ProfileComponent } from '../profile/profile.component';
import { SugestionsComponent } from '../sugestions/sugestions.component';
import { FooterComponent } from '../footer/footer.component';
import { FollowsComponent } from '../follows/follows.component';
import { LanguagesListComponent } from '../languages-list/languages-list.component';
import { LinksBlockComponent } from '../links-block/links-block.component';

export default {
  title: 'Instagram UI/Organisms/SecondaryBlockComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        SecondaryBlockComponent,
        ProfileComponent,
        SugestionsComponent,
        FooterComponent,
        FollowsComponent,
        LanguagesListComponent,
        LinksBlockComponent
      ],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (storys: any) => `<div style="margin: 3em">${storys}</div>`
    ),
  ],
  component: SecondaryBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SecondaryBlockComponent> = (
  args: SecondaryBlockComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
