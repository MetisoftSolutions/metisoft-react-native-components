import * as React from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { StyledButton } from 'components/shared/StyledButton/StyledButton';
import { ActionSheet } from 'components/shared/ActionSheet';
import { Text } from 'react-native';



export const ActionSheetScreen: React.FC<NavigationStackScreenProps> = props => {
  const [chosenActionId, setChosenActionId] = React.useState('');
  const [isActionSheetOpen, setIsActionSheetOpen] = React.useState(false);



  return (
    <ComponentScreenTemplate {...props}>
      <StyledButton
        label="Open action sheet"
        onPress={() => setIsActionSheetOpen(true)} />

      {!!chosenActionId && (
        <Text>
          Chose action with ID: {chosenActionId}
        </Text>
      )}

      {isActionSheetOpen && (
        <ActionSheet
          title="Example action sheet"
          options={[
            {
              id: 'option1',
              label: "Option 1"
            },
            {
              id: 'option2',
              label: "Option 2"
            },
            {
              id: 'delete',
              label: "Delete",
              isDestructive: true
            },
            {
              id: 'cancel',
              label: "Cancel",
              isCancel: true
            }
          ]}
          onDismiss={() => setIsActionSheetOpen(false)}
          onSelectOption={optionId => {
            setIsActionSheetOpen(false);
            setChosenActionId(optionId);
          }} />
      )}
    </ComponentScreenTemplate>
  );
};
