import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Authentication from '../Screens/Authentication/Authentication';
import Main from '../Screens/Main';
import Inbox from '../Screens/Inbox/Inbox';
import Chat from '../Screens/Inbox/Chat';
import {View, StyleSheet, Text, Image } from 'react-native';
import EnIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useChatting} from '../store';
import SeePosts from '../Components/Explore/SeePosts/SeePosts';


const MyStack = createStackNavigator();


function Stack() {
  const {chattingWith,setChattingWith} = useChatting();
  return (
    <MyStack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: "black",
        height: 55,
      },
      headerTintColor: 'white',
      
    }}>
      <MyStack.Screen name="Main" component={Main} options={{
        headerShown: false
      }} />
      <MyStack.Screen name="Inbox" component={Inbox}
        options={{
          headerTitle: () => <Text style={styles.InboxHeader}>PAPPU <EnIcon name='chevron-down' size={20} /></Text>,
          headerRight: () => 
          <View style={[styles.InboxHeader,{display:'flex',flexDirection:'row',gap:20 }]}>
              <FeatherIcon name='video' size={27} color='white' />
              <SimpleIcon name='note' size={27} color='white' />
            </View>
          
        }} />
      <MyStack.Screen name="Chat" component={Chat} 
      options={{
        headerTitle:()=>(
          <View style={{display:'flex',flexDirection:'row',gap:10}}>
            <View style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
              source={{
                uri:chattingWith.profilePic
              }}
              style={{ height: 35, width: 35, borderRadius: 20 }}/>
            </View>
            <View>
              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>{chattingWith.name}</Text>
              <Text style={{color:'white',fontSize:13}}>{chattingWith.username}</Text>
            </View>
          </View>
        ),
        headerRight:()=>
        <View style={[styles.InboxHeader,{display:'flex',flexDirection:'row',gap:20 }]}>
              <Ionicons name='call-outline' size={27} color='white'/>
              <FeatherIcon name='video' size={27} color='white' />
            </View>
      }}
      />
        <MyStack.Screen name="Authentication" component={Authentication} />
        <MyStack.Screen name="ExplorePost" component={SeePosts} />

    </MyStack.Navigator>
  )
}

const styles = StyleSheet.create({
  InboxHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20
  }
})

export default Stack
