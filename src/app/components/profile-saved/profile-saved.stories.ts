import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  Story,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ProfileSavedComponent } from './profile-saved.component';
import { FooterComponent } from '../footer/footer.component';
import { LinksBlockComponent } from '../links-block/links-block.component';
import { LanguagesListComponent } from '../languages-list/languages-list.component';

export default {
  title: 'Instagram UI/Organisms/ProfileSavedComponent',
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [ProfileSavedComponent, FooterComponent, LinksBlockComponent, LanguagesListComponent],
      imports: [CommonModule],
    }),
  ],
  component: ProfileSavedComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileSavedComponent> = (
  args: ProfileSavedComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
