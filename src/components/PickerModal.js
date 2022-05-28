import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const PickerModal = ({
  pickerValue,
  isVisible,
  onClose,
  options,
  onSelect,
  onOpenPicker,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.picker} onPress={onOpenPicker}>
        <Text style={styles.pickerText}>{pickerValue}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.centerView}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.transparent} />
          </TouchableWithoutFeedback>

          <View style={styles.modalView}>
            <FlatList
              data={options}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    typeof onSelect === 'function' && onSelect(item)
                  }>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PickerModal;

const styles = StyleSheet.create({
  picker: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  pickerText: {
    fontSize: 14,
    color: 'black',
  },
  centerView: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparent: {
    width,
    height,
    backgroundColor: 'black',
    opacity: 0.2,
    position: 'absolute',
  },
  modalView: {
    margin: 20,
    padding: 20,
    minWidth: width * 0.8,
    minHeight: height * 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 18,
    marginVertical: 10,
  },
});
