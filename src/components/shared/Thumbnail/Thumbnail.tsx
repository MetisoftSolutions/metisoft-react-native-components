import * as React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  View,
  Image,
  Platform,
  Text
} from 'react-native';

import { Button } from 'components/shared/Button';
import { Lightbox } from './Lightbox/Lightbox';



const __padding = 4;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: __padding
  },

    image: {
      position: 'absolute',
      top: __padding,
      left: __padding
    },

    deleteButton: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? -__padding : 0,
      right: Platform.OS === 'ios' ? -__padding : 0,
      paddingLeft: 10,
      paddingBottom: 10
    }
});



export interface IThumbnailProps {
  size: number;
  imageUrl: string;
  hasDeleteButton?: boolean;
  lightboxOnPress?: boolean;
  imgDelete?: number;
  onPressDelete?: () => void;
}

export const Thumbnail: React.FC<IThumbnailProps> = props => {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);



  function handlePress() {
    if (props.lightboxOnPress) {
      setIsLightboxOpen(true);
    }
  }



  return (
    <>
      <Button onPress={handlePress}>
        <View
          style={{
            ...styles.container,
            width: props.size,
            height: props.size
          }}>

          <Image
            style={styles.image}
            source={{
              uri: props.imageUrl,
              width: props.size,
              height: props.size
            }} />

          {props.hasDeleteButton && (
            <Button
              onPress={props.onPressDelete}>
              {!_.isUndefined(props.imgDelete) ? (
                <Image
                  source={props.imgDelete} />

              ) : (
                <Text>
                  X
                </Text>
              )}
            </Button>
          )}

        </View>
      </Button>

      {isLightboxOpen && (
        <Lightbox
          imageUrl={props.imageUrl}
          onPress={() => setIsLightboxOpen(false)} />
      )}
    </>
  );
};
