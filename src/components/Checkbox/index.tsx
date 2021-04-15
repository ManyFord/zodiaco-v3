import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';



interface CheckBoxProps {
  label: string,
  labelStyle: object,
  iconColor: string,
  handleChange?: ((event: any) => void)
  value: boolean
  checkColor: string
}


const Checkbox: React.FC<CheckBoxProps> = ({ label, labelStyle, iconColor, handleChange, value, checkColor }) => {

  return (
    <View style={styles.WrapperCheckBox}>
      <TouchableOpacity onPress={handleChange} style={[
        styles.CheckBox,
        { borderColor: checkColor ? checkColor : '#fff' }
      ]}>
        {
          value ? <Icon name="check"
            style={{
              fontSize: 16,
              color: iconColor ? iconColor : '#fff'
            }}
          /> : null
        }
      </TouchableOpacity>
      <Text style={[styles.LabelCheck, labelStyle]}>
        {label}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  CheckBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center"
  },
  LabelCheck: {
    color: '#111',
    marginLeft: 10
  }
})

export default Checkbox