import * as React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import { StyledButton } from 'components/shared/StyledButton/StyledButton';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { BaseScreenTemplate } from 'components/screens/templates/BaseScreenTemplate/BaseScreenTemplate';



const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex'
  }
});



export const ComponentScreenTemplate: React.FC<NavigationStackScreenProps<any>> = props => {
  return (
    <BaseScreenTemplate>
      <StyledButton
        label="Back to directory"
        onPress={() => props.navigation.pop()} />

      <View style={styles.body}>
        {props.children}
      </View>
    </BaseScreenTemplate>
  );
};
