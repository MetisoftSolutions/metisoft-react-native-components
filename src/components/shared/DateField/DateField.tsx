import * as React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import { TextField } from 'components/shared/TextField';
import moment from 'moment';
import { Button } from 'components/shared/Button';
import { CalendarModal } from 'components/shared/CalendarModal';



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



export interface IDateFieldProps {
  dateFormatType?: 'normal' | 'shortNumeric';
  value: moment.Moment;
  onChange: (value: moment.Moment) => void;
  iconCalendar?: number;
  disableMargins?: boolean;
  minValue?: moment.Moment;
  maxValue?: moment.Moment;
  onError?: (message: string) => void;
}

export const DateField: React.FC<IDateFieldProps> = props => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  let format = 'MMMM D, YYYY';
  if (props.dateFormatType === 'shortNumeric') {
    format = 'M/D/YYYY';
  }



  function handleChange(value: moment.Moment) {
    setIsModalOpen(false);
    value.startOf('day');

    if (props.minValue && value.isBefore(props.minValue)) {
      if (props.onError) {
        props.onError(`Dates earlier than ${props.minValue.format('M/D/YYYY')} are not allowed.`);
      }
      return;
    }

    if (props.maxValue && value.isAfter(props.maxValue)) {
      if (props.onError) {
        props.onError(`Dates later than ${props.maxValue.format('M/D/YYYY')} are not allowed.`);
      }
      return;
    }

    if (props.onError) {
      props.onError("");
    }
    props.onChange(value);
  }



  return (
    <View style={styles.container}>

      <TextField
        value={props.value ? props.value.format(format) : ""}
        onChange={() => {}}
        icon={props.iconCalendar}
        disableMargins={props.disableMargins} />

      <View style={styles.overlay}>
        <Button
          fullHeight
          onPress={() => setIsModalOpen(true)} />
      </View>

      {isModalOpen && (
        <View>
          <CalendarModal
            value={props.value || moment()}
            onAccept={handleChange}
            onDismiss={() => setIsModalOpen(false)} />
        </View>
      )}

    </View>
  );
};
