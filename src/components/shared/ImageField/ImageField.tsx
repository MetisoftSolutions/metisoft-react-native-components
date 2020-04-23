import * as React from 'react';
import _ from 'lodash';

import {
  View,
  Image,
  StyleSheet,
  Text,
  Platform,
  ImageSourcePropType
} from 'react-native';
import {
  ImageSourceOptionModal,
  IImageSource
} from './ImageSourceOptionModal/ImageSourceOptionModal';

import { Button } from 'components/shared/Button';
import * as imagePicker from 'expo-image-picker';



const __imageDimensions = {
  width: 80,
  height: 80
};

const __maxFileSizeMb = 10;



const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

    image: {
      marginRight: 22,
      borderRadius: Math.floor(__imageDimensions.width / 2)
    },

    placeholder: {
      marginRight: 22,
      borderRadius: __imageDimensions.width / 2,
      width: __imageDimensions.width,
      height: __imageDimensions.height,
      backgroundColor: '#ccc'
    },

    label: {
      fontSize: 12,
      lineHeight: 22,
      color: '#000'
    },

    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 10
    }
});



const __imagePickerOptions: imagePicker.ImagePickerOptions = {
  aspect: [1, 1],
  allowsEditing: true,
  allowsMultipleSelection: false,
  base64: true
};



/**
 * For some reason, iOS won't work after the first time you request either camera
 * or camera roll unless a timeout of about a second is set. This doesn't seem to
 * be an issue for Android.
 *
 * https://forums.expo.io/t/ios-standalone-app-camera-camera-roll-not-working/20457/4
 */
const __timeoutInterval = Platform.OS === 'ios' ? 1000 : 0;



export interface IImageFieldProps {
  label?: string;
  marginBottom?: string | number;
  iconAddImage?: number;

  /**
   * If provided, will be used as the initial image, before the user changes
   * the image. After any image changes, `base64Image` is used.
   */
  initImageUrl?: string;

  /**
   * If provided, this will override the default display element. Button actions
   * will still operate as normal.
   */
  elCustom?: JSX.Element;

  base64Image: string;

  /**
   * If provided, will execute the given function whenever the field is pressed,
   * but before the default action executes. Returning `true` will allow the
   * default action to proceed; returning `false` will prevent the default action.
   */
  onPressBeforeAction?: () => boolean;

  onChangeBase64Image: (base64Image: string) => void;
  onError: (message: string) => void;
}

export const ImageField: React.FC<IImageFieldProps> = props => {
  const [isImageSourceOptionModalOpen, setIsImageSourceOptionModalOpen] = React.useState(false);



  function handleAcceptImageSourceOptionModal(value: IImageSource) {
    setIsImageSourceOptionModalOpen(false);

    if (value === 'camera') {
      getImageFromCamera();
    } else if (value === 'gallery') {
      getImageFromGallery();
    }
  }



  async function getAllPermissions() {
    const cameraPermissions = await imagePicker.requestCameraPermissionsAsync();
    if (cameraPermissions.granted) {
      const cameraRollPermissions = await imagePicker.requestCameraRollPermissionsAsync();
      if (cameraRollPermissions.granted) {
        return true;
      }
    }
    return false;
  }



  async function getImageFromCamera() {
    if (await getAllPermissions()) {
      setTimeout(async () => {
        const image = await imagePicker.launchCameraAsync(__imagePickerOptions);
        handleImageResult(image);
      }, __timeoutInterval);
    }
  }



  async function getImageFromGallery() {
    if (await getAllPermissions()) {
      setTimeout(async () => {
        const image = await imagePicker.launchImageLibraryAsync(__imagePickerOptions);
        handleImageResult(image);
      }, __timeoutInterval);
    }
  }



  function handlePressField() {
    if (props.onPressBeforeAction && !props.onPressBeforeAction()) {
      return;
    }
    setIsImageSourceOptionModalOpen(true);
  }



  function handleImageResult(image: imagePicker.ImagePickerResult) {
    if (image.cancelled === false) {
      const encodedImage = `data:image/jpeg;base64,${image.base64}`;
      const fileSizeMb = encodedImage.length / 1024 / 1024;
      if (fileSizeMb > __maxFileSizeMb) {
        props.onError(`File size cannot be larger than ${__maxFileSizeMb}.00MB (your image is ${fileSizeMb.toFixed(2)}MB in size).`);
      } else {
        props.onChangeBase64Image(encodedImage);
      }
    }
  }



  let imageSource: ImageSourcePropType | undefined = props.iconAddImage;
  if (props.base64Image) {
    imageSource = {
      uri: props.base64Image,
      width: __imageDimensions.width,
      height: __imageDimensions.height
    };

  } else if (props.initImageUrl) {
    imageSource = {
      uri: props.initImageUrl,
      width: __imageDimensions.width,
      height: __imageDimensions.height
    };
  }



  return (
    <View
      style={{
        ...styles.container,
        marginBottom: !_.isUndefined(props.marginBottom) ? props.marginBottom : 0
      }}>
      {props.elCustom || (
        <>
          {!_.isUndefined(imageSource) ? (
            <Image
              style={styles.image}
              source={imageSource} />

          ) : (
            <View
              style={styles.placeholder} />
          )}

          {props.label && (
            <Text
              style={styles.label}>
              {props.label}
            </Text>
          )}
        </>
      )}

      <View style={styles.overlay}>
        <Button
          fullHeight
          onPress={handlePressField} />
      </View>

      <ImageSourceOptionModal
        isVisible={isImageSourceOptionModalOpen}
        onAccept={handleAcceptImageSourceOptionModal}
        onDismiss={() => setIsImageSourceOptionModalOpen(false)} />
    </View>
  );
};
