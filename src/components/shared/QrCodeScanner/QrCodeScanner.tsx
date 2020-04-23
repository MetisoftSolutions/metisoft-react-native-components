import * as React from 'react';

import {
  BarCodeScanner,
  PermissionStatus,
  BarCodeScannedCallback
} from 'expo-barcode-scanner';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';



export interface IQrCodeScannerProps {
  onScanCode: (value: string) => void;
}

export const QrCodeScanner: React.FC<IQrCodeScannerProps> = props => {
  const [isScannerOpen, setIsScannerOpen] = React.useState(false);



  React.useEffect(() => {
    (async () => {
      const result = await BarCodeScanner.requestPermissionsAsync();
      if (result.status === PermissionStatus.GRANTED) {
        setIsScannerOpen(true);
      }
    })();
  }, []);



  const handleBarCodeScanned: BarCodeScannedCallback = params => {
    const data = params.data;
    if (data) {
      props.onScanCode(data);
    }
  };



  return isScannerOpen ? (
    <BarCodeScanner
      style={StyleSheet.absoluteFillObject}
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      onBarCodeScanned={handleBarCodeScanned} />
  ) : null;
};
