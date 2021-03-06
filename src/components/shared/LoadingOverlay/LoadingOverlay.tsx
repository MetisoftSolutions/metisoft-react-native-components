import * as React from 'react';

import {
  View,
  StyleSheet,
  Modal
} from 'react-native';



const styles = StyleSheet.create({
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: 1000
  }
});



export const LoadingOverlay: React.FC = () => {
  return (
    <Modal transparent>
      <View style={styles.loadingOverlay} />
    </Modal>
  );
};
