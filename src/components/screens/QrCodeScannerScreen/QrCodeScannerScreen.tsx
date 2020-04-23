import * as React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { QrCodeScanner } from 'components/shared/QrCodeScanner';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 400,
    display: 'flex'
  }
});



export const QrCodeScannerScreen: React.FC<NavigationStackScreenProps> = props => {
  const [scannedCode, setScannedCode] = React.useState("");



  return (
    <ComponentScreenTemplate {...props}>
      {!!scannedCode && (
        <Text>
          Scanned code: {scannedCode}
        </Text>
      )}

      <View style={styles.container}>
        <QrCodeScanner
          onScanCode={code => setScannedCode(code)} />
      </View>
    </ComponentScreenTemplate>
  );
};
