import * as React from 'react';
import _ from 'lodash';

import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TextInputProps
} from 'react-native';

import { Button } from 'components/shared/Button';



const __genericFieldIconContainer: any = {
  position: 'absolute',
  top: 0,
  bottom: 27,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
};



const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

    label: {
      fontSize: 12,
      lineHeight: 22,
      color: '#959fa9'
    },

  fieldContainer: {
    position: 'relative'
  },

    fieldIconContainer: {
      ...__genericFieldIconContainer,
      left: 0
    },

      fieldIcon: {
        marginLeft: 20
      },

    fieldRightIconContainer: {
      ...__genericFieldIconContainer,
      right: 10
    },

      fieldRightIconButtonContainer: {
        padding: 10
      },

    field: {
      borderColor: '#e8e8e8',
      backgroundColor: 'rgb(255, 255, 255)',
      fontSize: 14,
      lineHeight: 22,
      borderWidth: 1,
      borderRadius: 6,
      paddingTop: 16,
      paddingRight: 21,
      paddingBottom: 16,
      paddingLeft: 21,
      marginBottom: 27
    },
    field_search: {
      borderColor: Platform.OS === 'android' ? '#e8e8e8' : 'transparent',
      backgroundColor: '#fff',
      fontSize: 14,
      lineHeight: 22,
      borderWidth: 1,
      borderRadius: 100,
      shadowColor: '#8c9eb0',
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.3,
      shadowRadius: 7,
      paddingTop: 16,
      paddingRight: 21,
      paddingBottom: 16,
      paddingLeft: 21,
      marginBottom: 27
    },
    field_largePin: {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#e8e8e8',
      paddingTop: 18,
      paddingBottom: 18,
      paddingLeft: Platform.OS === 'ios' ? 30 : 0,
      textAlign: 'center',
      fontFamily: 'Begum-Bold',
      fontSize: 35,
      letterSpacing: 30
    }
});

const __textFieldWithIcon_paddingLeft = 45;
const __textFieldWithIcon_paddingRight = 45;



export interface ITextFieldProps {
  type?: 'normal' | 'email' | 'password' | 'phoneNumber' | 'numeric' | 'url';
  styleType?: 'normal' | 'search' | 'largePin';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  notEditable?: boolean;
  icon?: string | number;
  rightIcon?: string | number;
  onPressRightIcon?: () => void;
  disableMargins?: boolean;
  marginBottom?: string | number;
  numberOfLines?: number;
}

const __type2AutoCompleteType: Record<string, TextInputProps['autoCompleteType']> = {
  'email': 'email',
  'phoneNumber': 'tel'
};

const __type2TextContentType: Record<string, TextInputProps['textContentType']> = {
  'email': 'emailAddress',
  'phoneNumber': 'telephoneNumber',
  'url': 'URL'
};

const __type2KeyboardType: Record<string, TextInputProps['keyboardType']> = {
  'email': 'email-address',
  'phoneNumber': 'phone-pad',
  'numeric': 'decimal-pad',
  'url': 'url'
};

export const TextField: React.FC<ITextFieldProps> = props => {
  const type = props.type || 'normal';
  const autoCompleteType = __type2AutoCompleteType[type] || 'off';
  const textContentType = __type2TextContentType[type] || 'none';
  const keyboardType = __type2KeyboardType[type] || 'default';

  const hasIcon = !_.isUndefined(props.icon);
  const hasRightIcon = !_.isUndefined(props.rightIcon);

  let fieldStyleObject: any = styles.field;
  if (props.styleType === 'search') {
    fieldStyleObject = styles.field_search;
  } else if (props.styleType === 'largePin') {
    fieldStyleObject = styles.field_largePin;
  }



  return (
    <View>
      <View
        style={{
          ...styles.fieldContainer,
          marginBottom: !_.isUndefined(props.marginBottom) ?
            props.marginBottom :
            fieldStyleObject.marginBottom
        }}>
        <TextInput
          style={{
            ...fieldStyleObject,
            paddingLeft: hasIcon ?
              __textFieldWithIcon_paddingLeft :
              fieldStyleObject.paddingLeft,
            paddingRight: hasRightIcon ?
              __textFieldWithIcon_paddingRight :
              fieldStyleObject.paddingRight,
            marginBottom: props.disableMargins ?
              0 :
              fieldStyleObject.marginBottom
          }}
          value={props.value}
          onChangeText={props.onChange}
          secureTextEntry={props.type === 'password'}
          autoCompleteType={autoCompleteType}
          textContentType={textContentType}
          keyboardType={keyboardType}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          editable={!props.notEditable}
          multiline={!!props.numberOfLines && props.numberOfLines > 1}
          numberOfLines={props.numberOfLines} />

        {hasIcon && (
          <View style={!props.disableMargins ?
            styles.fieldIconContainer : {
              ...styles.fieldIconContainer,
              bottom: 0
            }}>
            <Image
              style={styles.fieldIcon}
              source={_.isNumber(props.icon) ?
                props.icon : {
                  uri: props.icon
                }} />
          </View>
        )}

        {hasRightIcon && (
          <View style={!props.disableMargins ?
            styles.fieldRightIconContainer : {
              ...styles.fieldRightIconContainer,
              bottom: 0
            }}>
            <Button
              onPress={props.onPressRightIcon}>
              <View style={styles.fieldRightIconButtonContainer}>
                <Image
                  source={_.isNumber(props.rightIcon) ?
                    props.rightIcon : {
                      uri: props.rightIcon
                    }} />
              </View>
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};
