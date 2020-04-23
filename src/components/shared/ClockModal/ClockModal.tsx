import * as React from 'react';

import {
  Platform,
  Modal,
  StyleSheet,
  View
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Button } from 'components/shared/Button';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

    backdrop: {
      flex: 1,
      backgroundColor: '#000',
      opacity: 0.5
    },

    modal: {
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch'
    },

      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

        button: {
          padding: 20,
          backgroundColor: '#fff'
        }
});



export interface IClockModalProps {
  value: moment.Moment;
  onAccept: (value: moment.Moment) => void;
  onDismiss: () => void;
}

export const ClockModal: React.FC<IClockModalProps> = props => {
  const [iosValue, setIosValue] = React.useState(props.value);



  function handleAndroidChange(event: any, date: Date | undefined) {
    if (date) {
      props.onAccept(moment(date));
    } else {
      props.onDismiss();
    }
  }



  function handleIosChange(event: any, date: Date | undefined) {
    if (date) {
      setIosValue(moment(date));
    }
  }



  return Platform.OS === 'android' ? (
    <DateTimePicker
      value={props.value.toDate()}
      onChange={handleAndroidChange}
      mode="time"
      display="spinner" />

  ) : (
    <Modal
      animationType="fade"
      visible
      transparent
      onDismiss={() => {}}>

      <View style={styles.container}>
        <View style={styles.backdrop}>
          <Button
            fullHeight
            onPress={props.onDismiss} />
        </View>

        <View style={styles.modal}>
          <View style={styles.header}>
            <Button
              label="Cancel"
              onPress={props.onDismiss} />

            <Button
              label="OK"
              onPress={() => props.onAccept(iosValue)} />
          </View>

          <DateTimePicker
            value={iosValue.toDate()}
            onChange={handleIosChange}
            mode="time"
            display="default" />
        </View>
      </View>

    </Modal>
  );
};
