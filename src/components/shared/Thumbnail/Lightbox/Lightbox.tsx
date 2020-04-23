import * as React from 'react';

import {
  Modal,
  Image,
  Dimensions,
  Alert,
  StyleSheet,
  View
} from 'react-native';

import { ModalBackdrop } from 'components/shared/ModalBackdrop';
import { Button } from 'components/shared/Button';



const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});



interface IDimensions {
  width: number;
  height: number;
}

export interface ILightboxProps {
  imageUrl: string;
  onPress: () => void;
}

export const Lightbox: React.FC<ILightboxProps> = props => {
  const [rawImageDimensions, setRawImageDimensions] = React.useState<IDimensions>({
    width: 0,
    height: 0
  });

  if (rawImageDimensions.width === 0 && rawImageDimensions.height === 0) {
    Image.getSize(
      props.imageUrl,
      (width, height) => setRawImageDimensions({
        width,
        height
      }),
      err => Alert.alert("Error", "There was an error retrieving the image size.")
    );
  }



  const imageDisplayDimensions = {
    width: 0,
    height: 0
  };
  if (rawImageDimensions.width > 0 && rawImageDimensions.height > 0) {
    imageDisplayDimensions.width = Dimensions.get('window').width * .9;
    imageDisplayDimensions.height = (rawImageDimensions.height * imageDisplayDimensions.width) / rawImageDimensions.width;
  }



  return (
    <Modal
      transparent
      visible>

      <ModalBackdrop>
        <Button
          fullHeight
          onPress={props.onPress}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: props.imageUrl,
                width: imageDisplayDimensions.width,
                height: imageDisplayDimensions.height
              }} />
          </View>
        </Button>
      </ModalBackdrop>

    </Modal>
  );
};
