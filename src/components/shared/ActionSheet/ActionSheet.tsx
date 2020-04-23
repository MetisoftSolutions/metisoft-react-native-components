import * as React from 'react';
import _ from 'lodash';

import {
  Platform,
  ActionSheetIOS,
  View
} from 'react-native';
import {
  SelectionModal,
  IOption as ISelectionModalOption
} from './SelectionModal/SelectionModal';

import { useIsFocused } from 'react-navigation-hooks';



export interface IOption {
  id: string;
  label: string;
  isCancel?: boolean;
  isDestructive?: boolean;
}

export interface IActionSheetProps {
  title?: string;
  options: IOption[];
  onSelectOption: (optionId: string) => void;
  onDismiss: () => void;
}

export const ActionSheet: React.FC<IActionSheetProps> = props => {
  const isFocused = useIsFocused();

  const cancelButtonIndex = _.findIndex(props.options, option => !!option.isCancel);



  function handlePressIosAction(buttonIndex: number) {
    if (buttonIndex === cancelButtonIndex) {
      props.onDismiss();
    } else {
      props.onSelectOption(props.options[buttonIndex].id);
    }
  }



  React.useEffect(() => {
    if (Platform.OS === 'ios' && isFocused) {
      ActionSheetIOS.showActionSheetWithOptions({
        title: props.title,
        options: _.map(props.options, option => option.label),
        cancelButtonIndex,
        destructiveButtonIndex: _.findIndex(props.options, option => !!option.isDestructive)
      }, handlePressIosAction);
    }
  }, [isFocused]);



  return Platform.OS === 'android' ? (
    <SelectionModal
      singleSelectMode
      options={_.compact(_.map(props.options, (option): ISelectionModalOption | null => !option.isCancel ? {
        id: option.id,
        label: option.label
      } : null))}
      onAccept={ids => props.onSelectOption(_.keys(_.pickBy(ids))[0])}
      onDismissInSingleSelectMode={props.onDismiss}
      initSelectedIds={{}} />

  ) : (
    <View />
  );
};
