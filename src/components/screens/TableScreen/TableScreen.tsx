import * as React from 'react';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { Table } from 'components/shared/Table';



export const TableScreen: React.FC<NavigationStackScreenProps> = props => {
  return (
    <ComponentScreenTemplate {...props}>
      <Table
        columns={[
          {
            id: 'name',
            label: "Name"
          },
          {
            id: 'rank',
            label: "Rank",
            width: 45
          },
          {
            id: 'position',
            label: "Position",
            width: 100
          }
        ]}
        rows={[
          {
            id: '1',
            name: "Jean-Luc Picard",
            rank: "●●●●",
            position: "Commanding officer"
          },
          {
            id: '2',
            name: "William T. Riker",
            rank: "●●●",
            position: "Executive officer"
          },
          {
            id: '3',
            name: "Data",
            rank: "●●○",
            position: "Operations officer"
          },
          {
            id: '4',
            name: "Beverly Crusher",
            rank: "●●●",
            position: "Chief medical officer"
          },
          {
            id: '5',
            name: "Deanna Troi",
            rank: "●●●",
            position: "Counselor"
          },
          {
            id: '6',
            name: "Geordi LaForge",
            rank: "●●○",
            position: "Chief engineer"
          },
          {
            id: '7',
            name: "Worf",
            rank: "●●",
            position: "Security officer"
          }
        ]} />
    </ComponentScreenTemplate>
  );
};
