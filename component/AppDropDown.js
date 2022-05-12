import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import appstyle from './appstyle';
import dropdownstyle from './dropdownstyle'

  const data = [
	  {label: 'SEA Shipping @1.50/pound', value: 'SeaShipping'},
	  {label: 'CAR Shipping @4.50/pound', value: 'CarShipping', },
	  {label: 'AIR Shipping @10.50/pound', value: 'AirShipping'}
  ];

const DropdownComponent = ({setShipping}) => {
const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);
//{renderLabel()}
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[dropdownstyle.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    setShipping(value);


    return (
        <Dropdown
          style={appstyle.receiverSelect} 
          selectedTextStyle={appstyle.receiverSelectOption} 
          setCurrentValue={'CarShipping'} 
          //style={[appstyle.receiverSelect]}
          //textStyle={{fontSize: 16, paddingTop: 0, paddingBottom: 0}}
          //, isFocus && { borderColor: 'blue' }
          //placeholderStyle={styles.placeholderStyle}
          //selectedTextStyle={styles.selectedTextStyle}
          //inputSearchStyle={styles.inputSearchStyle}
          //iconStyle={dropdownstyle.iconStyle}
          data={data}
          //search
          maxHeight={250}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
    );
  };



export default DropdownComponent;

