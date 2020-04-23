import * as React from 'react';
import moment from 'moment';

import {
  View,
  StyleSheet
} from 'react-native';

import { TextField } from 'components/shared/TextField';
import { ClockModal } from 'components/shared/ClockModal';
import { Button } from 'components/shared/Button';



const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
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



export interface ITimeFieldProps {
  value: moment.Moment;
  onChange: (value: moment.Moment) => void;
}

export const TimeField: React.FC<ITimeFieldProps> = props => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);



  function handleChange(value: moment.Moment) {
    setIsModalOpen(false);
    props.onChange(value);
  }



  return (
    <View style={styles.container}>

      <TextField
        value={props.value ? props.value.format('h:mm A') : ""}
        onChange={() => {}}
        disableMargins />

      <View style={styles.overlay}>
        <Button
          fullHeight
          onPress={() => setIsModalOpen(true)} />
      </View>

      {isModalOpen && (
        <View>
          <ClockModal
            value={props.value || moment()}
            onAccept={handleChange}
            onDismiss={() => setIsModalOpen(false)} />
        </View>
      )}

    </View>
  );
};
