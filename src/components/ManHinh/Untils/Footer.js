import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;
import ModalThongBao from './ModalThongBao';

const Footer=()=> {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
      <View
        style={{
          height: 0.1 * getHeight,
          backgroundColor: '#ffffff',
          width: getWidth,
        }}>
          {/* <ModalThongBao
        visible={showModal}
        onClose={closeModal}
        message="Chưa hoàn thành!"
      /> */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: '100%',
            backgroundColor: '#e6e6fa',
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: -5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <TouchableOpacity
            style={{
              width: '30%',
              height: '90%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('TrangCaNhan')
            }}>
            <Image
              resizeMode="stretch"
              source={require('../../../images/notification.png')}
              style={{width: 33, height: 33}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '30%',
              height: '90%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              openModal();
            }}>
            <Image
              resizeMode="stretch"
              source={require('../../../images/home.png')}
              style={{width: 33, height: 33}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '30%',
              height: '90%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              openModal();
            }}>
            <Image
              resizeMode="stretch"
              source={require('../../../images/person.png')}
              style={{width: 33, height: 33}}
            />
          </TouchableOpacity>
        </View>
      </View>
   
  );
}
export default Footer;
