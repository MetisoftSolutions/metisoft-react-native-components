import * as React from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { DateField } from 'components/shared/DateField';
import moment from 'moment';



export const DateFieldScreen: React.FC<NavigationStackScreenProps> = props => {
  const [date, setDate] = React.useState(moment());



  return (
    <ComponentScreenTemplate {...props}>
      <DateField
        value={date}
        onChange={setDate} />
    </ComponentScreenTemplate>
  );
};
