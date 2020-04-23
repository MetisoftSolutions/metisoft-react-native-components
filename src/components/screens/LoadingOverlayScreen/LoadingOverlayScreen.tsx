import * as React from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { StyledButton } from 'components/shared/StyledButton/StyledButton';
import { LoadingOverlay } from 'components/shared/LoadingOverlay';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';



export const LoadingOverlayScreen: React.FC<NavigationStackScreenProps> = props => {
  const [isOverlayActive, setIsOverlayActive] = React.useState(false);



  function handlePressActivate() {
    setIsOverlayActive(true);
    setTimeout(() => setIsOverlayActive(false), 2000);
  }



  return (
    <ComponentScreenTemplate {...props}>
      <StyledButton
        label="Activate loading overlay for 2 seconds"
        onPress={handlePressActivate} />

      {isOverlayActive && (
        <LoadingOverlay />
      )}
    </ComponentScreenTemplate>
  );
};
