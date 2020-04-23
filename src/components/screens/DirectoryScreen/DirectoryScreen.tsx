import * as React from 'react';
import _ from 'lodash';

import {
  Text,
  View
} from 'react-native';

import { StyledButton } from 'components/shared/StyledButton/StyledButton';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { BaseScreenTemplate } from 'components/screens/templates/BaseScreenTemplate/BaseScreenTemplate';



interface IComponentEntry {
  id: string;
  label: string;
}

const __componentEntries: IComponentEntry[] = [
  {
    id: 'actionSheet',
    label: "Action sheet"
  },
  {
    id: 'button',
    label: "Button"
  },
  {
    id: 'dateField',
    label: "Date field"
  },
  {
    id: 'imageField',
    label: "Image field"
  },
  {
    id: 'loadingOverlay',
    label: "Loading overlay"
  },
  {
    id: 'logo',
    label: "Logo"
  },
  {
    id: 'qrCodeScanner',
    label: "QR code scanner"
  },
  {
    id: 'table',
    label: "Table"
  },
  {
    id: 'thumbnail',
    label: "Thumbnail"
  },
  {
    id: 'timeField',
    label: "Time field"
  }
];



export const DirectoryScreen: React.FC<NavigationStackScreenProps> = props => {
  return (
    <BaseScreenTemplate>
      <Text>
        Directory Screen
      </Text>

      {_.map(__componentEntries, componentEntry => (
        <StyledButton
          key={componentEntry.id}
          label={componentEntry.label}
          onPress={() => props.navigation.navigate(componentEntry.id)} />
      ))}
    </BaseScreenTemplate>
  );
};
