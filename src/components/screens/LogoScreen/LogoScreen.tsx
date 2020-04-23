import * as React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { Logo } from 'components/shared/Logo/Logo';

const imgUbuntu = require('assets/images/ubuntuLogo.png');



const styles = StyleSheet.create({
  container: {
    marginBottom: 100
  }
});



export const LogoScreen: React.FC<NavigationStackScreenProps> = props => {
  return (
    <ComponentScreenTemplate {...props}>
      <View style={styles.container}>
        <Text>
          Size: 100
        </Text>

        <Logo
          url={imgUbuntu}
          size={100} />

        <Text>
          Size: 200
        </Text>

        <Logo
          url={imgUbuntu}
          size={200} />

        <Text>
          Size: 100; rounded square mode
        </Text>

        <Logo
          url={imgUbuntu}
          size={100}
          displayAsRoundedSquare />

        <Text>
          Size: 200; rounded square mode
        </Text>

        <Logo
          url={imgUbuntu}
          size={200}
          displayAsRoundedSquare />

        <Text>
          Placeholder
        </Text>

        <Logo
          url=""
          size={100} />

        <Text>
          Placeholder, rounded square mode
        </Text>

        <Logo
          url=""
          size={100}
          displayAsRoundedSquare />
      </View>
    </ComponentScreenTemplate>
  );
};
