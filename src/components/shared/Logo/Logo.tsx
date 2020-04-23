import * as React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    backgroundColor: 'rgb(237, 237, 237)',
    elevation: 4,
    shadowColor: 'rgb(140, 158, 176)',
    shadowOpacity: 0.46,
    shadowOffset: {
      width: 0,
      height: 5
    }
  },

    logo: {
      borderRadius: 7
    },

    placeholder: {
      backgroundColor: '#ccc'
    }
});



export interface ILogoProps {
  url: string | number;
  size: number;
  displayAsRoundedSquare?: boolean;
}

export const Logo: React.FC<ILogoProps> = props => {
  return (
    <View
      style={{
        ...styles.container,
        width: props.size,
        height: props.size,
        borderRadius: props.displayAsRoundedSquare ?
          styles.container.borderRadius :
          props.size
      }}>

      {(_.isNumber(props.url) || (_.isString(props.url) && !_.isEmpty(props.url))) ? (
        <Image
          style={{
            ...styles.logo,
            width: props.size,
            height: props.size,
            borderRadius: props.displayAsRoundedSquare ?
              styles.logo.borderRadius :
              props.size
          }}
          source={_.isString(props.url) ? {
            uri: props.url,
            width: props.size,
            height: props.size
          } : props.url} />

      ) : (
        <View
          style={{
            ...styles.placeholder,
            width: props.size,
            height: props.size,
            borderRadius: props.displayAsRoundedSquare ?
              styles.logo.borderRadius :
              props.size
          }} />
      )}
    </View>
  );
};
