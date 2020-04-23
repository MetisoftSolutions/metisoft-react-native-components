import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { DirectoryScreen } from 'components/screens/DirectoryScreen/DirectoryScreen';
import { ButtonScreen } from 'components/screens/ButtonScreen/ButtonScreen';
import { ActionSheetScreen } from 'components/screens/ActionSheetScreen/ActionSheetScreen';
import { LoadingOverlayScreen } from 'components/screens/LoadingOverlayScreen/LoadingOverlayScreen';
import { QrCodeScannerScreen } from 'components/screens/QrCodeScannerScreen/QrCodeScannerScreen';
import { LogoScreen } from 'components/screens/LogoScreen/LogoScreen';
import { TableScreen } from 'components/screens/TableScreen/TableScreen';
import { ThumbnailScreen } from 'components/screens/ThumbnailScreen/ThumbnailScreen';
import { DateFieldScreen } from 'components/screens/DateFieldScreen/DateFieldScreen';
import { ImageFieldScreen } from 'components/screens/ImageFieldScreen/ImageFieldScreen';
import { TimeFieldScreen } from 'components/screens/TimeFieldScreen/TimeFieldScreen';



export const MainNavigatorScreen = createAppContainer(
  createStackNavigator({

    directory: {
      screen: DirectoryScreen
    },

    actionSheet: {
      screen: ActionSheetScreen
    },

    button: {
      screen: ButtonScreen
    },

    dateField: {
      screen: DateFieldScreen
    },

    imageField: {
      screen: ImageFieldScreen
    },

    loadingOverlay: {
      screen: LoadingOverlayScreen
    },

    logo: {
      screen: LogoScreen
    },

    qrCodeScanner: {
      screen: QrCodeScannerScreen
    },

    table: {
      screen: TableScreen
    },

    thumbnail: {
      screen: ThumbnailScreen
    },

    timeField: {
      screen: TimeFieldScreen
    }

  })
);
