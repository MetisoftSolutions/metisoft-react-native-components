import _ from 'lodash';
import * as React from 'react';

import {
  Modal,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import { Button } from 'components/shared/Button';
import { LoadingOverlay } from 'components/shared/LoadingOverlay';
import { ModalBackdrop } from 'components/shared/ModalBackdrop';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 75,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

    backButtonContainer: {
      alignSelf: 'flex-start'
    },

      backButton: {
        marginTop: 37,
        marginBottom: 11,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 21
      },

    backButtonPlaceholder: {
      width: 18,
      height: 32,
      marginTop: 37,
      marginBottom: 11
    },

    footer: {
      paddingTop: 10,
      marginBottom: 31,
      display: 'flex',
      alignItems: 'center'
    }
});



export interface IFullScreenModalProps {
  isVisible: boolean;
  isLoading?: boolean;
  hasBackButton?: boolean;
  hideFooter?: boolean;
  imgBack?: number;
  imgClose?: number;
  onPressBack?: () => void;
  onDismiss: () => void;
}

export const FullScreenModal: React.FC<IFullScreenModalProps> = props => {
  return (
    <Modal
      animationType="slide"
      visible={props.isVisible}
      transparent
      onDismiss={props.onDismiss}>

      <ModalBackdrop>

        {props.isLoading && (
          <LoadingOverlay />
        )}

        <View style={styles.container}>
          {props.hasBackButton ? (
            <View style={styles.backButtonContainer}>
              <Button
                onPress={props.onPressBack}>
                {props.imgBack ? (
                  <Image
                    source={props.imgBack} />

                ) : (
                  <Text>
                    Back
                  </Text>
                )}
              </Button>
            </View>

          ) : (
            <View style={styles.backButtonPlaceholder} />
          )}

          {props.children}

          {!props.hideFooter && (
            <View style={styles.footer}>
              <Button
                onPress={props.onDismiss}>
                {props.imgClose ? (
                  <Image
                    source={props.imgClose} />

                ) : (
                  <Text>
                    Close
                  </Text>
                )}
              </Button>
            </View>
          )}
        </View>

      </ModalBackdrop>

    </Modal>
  );
};
