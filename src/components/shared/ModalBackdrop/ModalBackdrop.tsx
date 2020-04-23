import * as React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';



const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});



export interface IModalBackdropProps { }

export const ModalBackdrop: React.FC<IModalBackdropProps> = props => {
  return (
    <View style={styles.backdrop}>
      {props.children}
    </View>
  );
};
