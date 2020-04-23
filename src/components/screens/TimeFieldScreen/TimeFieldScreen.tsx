import * as React from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { TimeField } from 'components/shared/TimeField';
import moment from 'moment';



export const TimeFieldScreen: React.FC<NavigationStackScreenProps> = props => {
  const [time, setTime] = React.useState(moment());



  return (
    <ComponentScreenTemplate {...props}>
      <TimeField
        value={time}
        onChange={setTime} />
    </ComponentScreenTemplate>
  );
};
