import * as React from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { ImageField } from 'components/shared/ImageField';
import { View } from 'react-native';



export const ImageFieldScreen: React.FC<NavigationStackScreenProps> = props => {
  const [image, setImage] = React.useState('');



  return (
    <ComponentScreenTemplate {...props}>
      <View>
        <ImageField
          label="Change image"
          base64Image={image}
          onChangeBase64Image={setImage}
          onError={() => {}} />
      </View>
    </ComponentScreenTemplate>
  );
};
