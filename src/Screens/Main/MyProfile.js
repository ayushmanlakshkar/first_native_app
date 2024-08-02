import React from 'react'
import { ScrollView, View } from 'react-native'
import MyDetails from '../../Components/MyProfile/MyDetails'
import MyPosts from '../../Components/MyProfile/MyPosts'
import PersonalPosts from '../../Components/MyProfile/MyPosts/PersonalPosts'

function MyProfile() {
  return (
      <ScrollView style={{ flex:1, backgroundColor: "black" }}>
        <MyDetails />
        <View style={{ flex:1}}>
          <MyPosts/>
          {/* <PersonalPosts />
          <PersonalPosts />
          <PersonalPosts /> */}
        </View>
      </ScrollView>
  )
}

export default MyProfile
