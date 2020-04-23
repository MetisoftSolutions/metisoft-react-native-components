import * as React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  LayoutChangeEvent
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch'
  },

    columnHeaderRow: {
      borderColor: 'rgb(238, 238, 238)',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      paddingTop: 6,
      paddingRight: 20,
      paddingBottom: 5,
      paddingLeft: 21,
      display: 'flex',
      flexDirection: 'row'
    },

      columnHeaderCell: {
        marginRight: 6,
        marginLeft: 5
      },

        columnHeaderCellText: {
          fontSize: 12,
          lineHeight: 22,
          color: 'rgb(149, 159, 169)'
        },

    row: {
      borderColor: 'rgb(238, 238, 238)',
      borderBottomWidth: 1,
      paddingTop: 14,
      paddingBottom: 13,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },

      cell: {
        marginRight: 6,
        marginLeft: 5
      }
});



export interface IColumn {
  id: string;
  label: string;
  width?: number;
  textAlign?: 'left' | 'center' | 'right';
  cellFontWeight?: 'normal' | 'bold';
}

export interface IRow {
  id: string;
  [columnId: string]: string | JSX.Element;
}

export interface ITableProps {
  columns: IColumn[];
  rows: IRow[];
  paddingLeft?: number;
  paddingRight?: number;
  hideBottomBorder?: boolean;
  marginBottom?: string | number;
  normalFontFamily?: string;
  boldFontFamily?: string;
}

export const Table: React.FC<ITableProps> = props => {
  const [cellFillWidth, setCellFillWidth] = React.useState(0);



  function handleLayout(event: LayoutChangeEvent) {
    const specifiedColumnWidthsTotal = _.sumBy(props.columns, column => column.width || 0);
    const numColumns = props.columns.length;
    const totalInterColumnMargin =
      (numColumns * (styles.columnHeaderCell.marginLeft + styles.columnHeaderCell.marginRight)) -
      styles.columnHeaderCell.marginLeft -
      styles.columnHeaderCell.marginRight;
    const tablePadding =
      (props.paddingLeft || styles.columnHeaderRow.paddingLeft) +
      (props.paddingRight || styles.columnHeaderRow.paddingRight);
    const totalSpecifiedWidth = specifiedColumnWidthsTotal + totalInterColumnMargin + tablePadding;
    const componentWidth = event.nativeEvent.layout.width;

    setCellFillWidth(componentWidth - totalSpecifiedWidth - styles.cell.marginRight - styles.cell.marginLeft);
  }



  const paddingStyles = StyleSheet.create({
    row: {
      paddingLeft: !_.isUndefined(props.paddingLeft) ? props.paddingLeft : styles.columnHeaderRow.paddingLeft,
      paddingRight: !_.isUndefined(props.paddingRight) ? props.paddingRight : styles.columnHeaderRow.paddingRight
    }
  });



  return (
    <View
      style={{
        ...styles.container,
        marginBottom: !_.isUndefined(props.marginBottom) ? props.marginBottom : 0
      }}
      onLayout={handleLayout}>
      <View
        style={{
          ...styles.columnHeaderRow,
          ...paddingStyles
        }}>
        {_.map(props.columns, (column, index) => {
          const isFirst = index === 0;
          const isLast = index === props.columns.length - 1;

          return (
            <View
              key={column.id}
              style={{
                ...styles.columnHeaderCell,
                width: !_.isUndefined(column.width) ? column.width : cellFillWidth,
                marginLeft: isFirst ? 0 : styles.columnHeaderCell.marginLeft,
                marginRight: isLast ? 0 : styles.columnHeaderCell.marginRight
              }}>
              <Text
                style={{
                  ...styles.columnHeaderCellText,
                  fontFamily: props.normalFontFamily || undefined,
                  textAlign: column.textAlign
                }}>
                {column.label}
              </Text>
            </View>
          );
        })}
      </View>

      {_.map(props.rows, (row, index) => {
        const isLastRow = index === props.rows.length - 1;

        return (
          <View
            key={row.id}
            style={{
              ...styles.row,
              ...paddingStyles.row,
              borderBottomWidth: isLastRow && props.hideBottomBorder ?
                0 :
                styles.row.borderBottomWidth
            }}>
            {_.map(props.columns, (column, columnIndex) => {
              const cell = row[column.id];
              const isFirst = columnIndex === 0;
              const isLastCell = columnIndex === props.columns.length - 1;

              return (
                <View
                  key={column.id}
                  style={{
                    ...styles.cell,
                    width: !_.isUndefined(column.width) ? column.width : cellFillWidth,
                    marginLeft: isFirst ? 0 : styles.columnHeaderCell.marginLeft,
                    marginRight: isLastCell ? 0 : styles.columnHeaderCell.marginRight
                  }}>

                  {_.isString(cell) ? (
                    <Text
                      style={{
                        textAlign: column.textAlign,
                        fontFamily: column.cellFontWeight === 'bold' ?
                          props.boldFontFamily || undefined :
                          props.normalFontFamily || undefined
                      }}>
                      {cell}
                    </Text>
                  ) : cell}

                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
