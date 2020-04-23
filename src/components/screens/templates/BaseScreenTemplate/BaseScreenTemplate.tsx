import * as React from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    display: 'flex'
  }
});



export const BaseScreenTemplate: React.FC = props => {
  return (
    <ScrollView style={styles.container}>
      {props.children}
    </ScrollView>
  );
};
