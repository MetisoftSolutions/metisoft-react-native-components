import * as React from 'react';

import { Button } from 'components/shared/Button';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { Alert } from 'react-native';



export const ButtonScreen: React.FC<NavigationStackScreenProps> = props => {
  return (
    <ComponentScreenTemplate {...props}>
      <Button
        label="Test button"
        onPress={() => Alert.alert("Button pressed")} />
    </ComponentScreenTemplate>
  );
};
