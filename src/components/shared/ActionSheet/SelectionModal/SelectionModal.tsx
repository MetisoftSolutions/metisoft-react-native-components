import * as React from 'react';
import _ from 'lodash';

import {
  ScrollView,
  Text,
  StyleSheet,
  View
} from 'react-native';

import { FullScreenModal } from 'components/shared/FullScreenModal';
import { Button } from 'components/shared/Button';
import update from 'immutability-helper';



export interface IOption {
  id: string;
  label: string;
}



const styles = StyleSheet.create({
  buttonRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  selectionOptionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

    selectionOptionLabel: {
      flex: 1,
      fontSize: 20
    },

    selectionOptionCheckContainer: {
      width: 50,
      height: 50
    },

      selectionOptionCheck: {
        width: 50,
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 7
      }
});



export interface ISelectionModalProps {
  options: IOption[];
  initSelectedIds: Record<string, boolean>;
  onAccept: (selectedIds: Record<string, boolean>) => void;
  onDismissInSingleSelectMode?: () => void;
  singleSelectMode?: boolean;
}

export const SelectionModal: React.FC<ISelectionModalProps> = props => {
  const [selectedIds, setSelectedIds] = React.useState<Record<string, boolean>>(props.initSelectedIds);



  function handlePressOption(id: string) {
    if (props.singleSelectMode) {
      props.onAccept({[id]: true});

    } else {
      setSelectedIds(update(selectedIds, {
        [id]: {
          $set: !selectedIds[id]
        }
      }));
    }
  }



  return (
    <FullScreenModal
      isVisible
      onDismiss={() => !props.singleSelectMode ?
        props.onAccept(props.initSelectedIds) :
        props.onDismissInSingleSelectMode ?
          props.onDismissInSingleSelectMode() :
          null}>

      <ScrollView>
        {_.map(props.options, (option, index) => (
          <SelectionOption
            key={option.id}
            label={option.label}
            isSelected={!!selectedIds[option.id]}
            onPress={() => handlePressOption(option.id)}
            isLast={index === props.options.length - 1} />
        ))}
      </ScrollView>

      {!props.singleSelectMode && (
        <View style={styles.buttonRow}>
          <Button
            label="Cancel"
            onPress={() => props.onAccept(props.initSelectedIds)} />

          <Button
            label="Accept"
            onPress={() => props.onAccept(selectedIds)} />
        </View>
      )}

    </FullScreenModal>

  );
};



interface ISelectionOptionProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  isLast: boolean;
}

const SelectionOption: React.FC<ISelectionOptionProps> = props => {
  return (
    <Button
      onPress={props.onPress}>

      <View
        style={{
          ...styles.selectionOptionContainer,
          borderBottomWidth: props.isLast ? 0 : styles.selectionOptionContainer.borderBottomWidth
        }}>
        <Text style={styles.selectionOptionLabel}>
          {props.label}
        </Text>

        <View style={styles.selectionOptionCheckContainer}>
          {props.isSelected && (
            <View style={styles.selectionOptionCheck} />
          )}
        </View>
      </View>

    </Button>
  );
};
