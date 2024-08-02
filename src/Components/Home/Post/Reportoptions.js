import React from 'react'
import { View, Button, Modal, StyleSheet, Text, FlatList, Image, TouchableHighlight, TextInput, ScrollView } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EnIcon from 'react-native-vector-icons/Entypo';
import { useReports } from '../../../store';

function Reportoptions() {
  const { isReportOpen, setReportOpen } = useReports()

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <TouchableHighlight onPress={() => setReportOpen()}>
            <AntIcon name='arrowleft' size={30} color='white' />
          </TouchableHighlight>
          <Text style={styles.heading}>About</Text>

        </View>
        <View style={styles.optionsContainer}>
          <View style={[styles.options,{ display: 'flex', flexDirection: 'row', gap: 10 }]}>
            <View style={{ color: 'red' }}>
              <MaterialIcon name='report' size={30} color="red" />
            </View>
            <Text style={[styles.options, { color: 'red' }]}>
              Report
            </Text>
          </View>
          <View style={styles.handle}></View>
          <View style={[styles.options,{ display: 'flex', flexDirection: 'row', gap: 10 }]}>
            <View style={{ color: 'red' }}>
              <FeatherIcon name='bookmark' size={30} color="white" />
            </View>
            <Text style={[styles.options, { color: 'white' }]}>
              About
            </Text>
          </View>
          <View style={styles.handle}></View>
          <View style={[styles.options,{ display: 'flex', flexDirection: 'row', gap: 10 }]}>
            <View style={{ color: 'red' }}>
              <EnIcon name='remove-user' size={30} color="white" />
            </View>
            <Text style={[styles.options, { color: 'white' }]}>
              Unfollow
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 44,
    borderTopColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 40,
    borderWidth: 1
  },
  handle: {
    borderWidth: 1,
    borderColor: 'grey',

  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 0.5,
    borderColor: 'white'
  },
  heading: {
    // display:'flex',
    color: 'white',
    fontSize: 25,
    left: 110
  },
  options: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 23,
    borderWidth:1,
  },
  optionsContainer: {
    display: 'flex',
    gap: 20,
    padding: 20
  }


})

export default Reportoptions

