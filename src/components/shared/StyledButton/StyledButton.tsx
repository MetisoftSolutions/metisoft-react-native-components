import * as React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  View
} from 'react-native';

import { Button } from 'components/shared/Button';



const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: '#8c8',
    padding: 10,
    marginBottom: 10,
    textAlign: 'center'
  }
});



export interface IStyledButtonProps {
  label: string;
  onPress?: () => void;
  marginBottom?: string | number;
}

export const StyledButton: React.FC<IStyledButtonProps> = props => {
  return (
    <View
      style={{
        marginBottom: !_.isUndefined(props.marginBottom) ? props.marginBottom : 0
      }}>

      <Button
        labelStyle={styles.button}
        label={props.label}
        onPress={props.onPress} />

    </View>
  );
};
