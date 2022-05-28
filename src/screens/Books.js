import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PickerModal} from '../components';

const Books = () => {
  const [pickerValue, setPickerValue] = useState('Select Books');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Books</Text>

      <PickerModal
        pickerValue={pickerValue}
        options={['science', 'maths', 'english', 'french', 'arabic']}
        onSelect={value => {
          setPickerValue(value), setShowPicker(false);
        }}
        isVisible={showPicker}
        onOpenPicker={() => setShowPicker(true)}
        onClose={() => setShowPicker(false)}
      />
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
