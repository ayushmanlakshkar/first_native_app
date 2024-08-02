import React from 'react'
import { Button, ScrollView, View } from 'react-native'
import Stories from '../../Components/Home/Stories'
import Posts from '../../Components/Home/Posts'
import { useNavigation } from '@react-navigation/native';


function Home({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} // hide vertical scrollbar
    showsHorizontalScrollIndicator={false}
    style={{
      backgroundColor:'black',
      height:'100%'
    }}>
      <Stories/>
      <Posts/>
    </ScrollView>
  )
}

export default Home
