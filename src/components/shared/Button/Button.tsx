import * as React from 'react';

import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';



export interface IOverrideStyles {
  buttonStyle?: any;
  textStyle?: any;
}

export interface IButtonProps {
  label?: string;
  labelStyle?: any;
  onPress?: () => void;
  isDisabled?: boolean;
  marginBottom?: string | number;
  fullHeight?: boolean;
}

export const Button: React.FC<IButtonProps> = props => {
  const innerButton = (
    <View
      style={{
        height: props.fullHeight ? '100%' : undefined,
        marginBottom: props.marginBottom
      }}>
      {props.label ? (
        <Text style={props.labelStyle}>
          {props.label}
        </Text>
      ) : props.children}
    </View>
  );

  return (
    <TouchableOpacity
      onPress={!props.isDisabled ? props.onPress : () => {}}>
      {innerButton}
    </TouchableOpacity>
  );
};
