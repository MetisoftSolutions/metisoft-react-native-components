import * as React from 'react';

import {
  Modal,
  View,
  StyleSheet
} from 'react-native';

import { Button } from 'components/shared/Button';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

    backdrop: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#000',
      opacity: 0.5
    },

    modal: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch'
    },

      button: {
        padding: 20
      },

        buttonLabel: {
          textAlign: 'center',
          padding: 20
        },

      text: {
        textAlign: 'center'
      }
});



export type IImageSource = 'camera' | 'gallery';

export interface IImageSourceOptionModalProps {
  isVisible: boolean;
  onAccept: (imageSource: IImageSource) => void;
  onDismiss: () => void;
}

export const ImageSourceOptionModal: React.FC<IImageSourceOptionModalProps> = props => {

  return (
    <Modal
      animationType="fade"
      visible={props.isVisible}
      transparent
      onDismiss={() => {}}>

      <View style={styles.container}>
        <View style={styles.backdrop}>
          <Button
            fullHeight
            onPress={props.onDismiss} />
        </View>

        <View style={styles.modal}>
          <Button
            label="From Camera"
            labelStyle={styles.buttonLabel}
            onPress={() => props.onAccept('camera')} />

          <Button
            label="From Gallery"
            labelStyle={styles.buttonLabel}
            onPress={() => props.onAccept('gallery')} />

          <Button
            label="Cancel"
            labelStyle={styles.buttonLabel}
            onPress={props.onDismiss} />
        </View>
      </View>

    </Modal>
  );
};
