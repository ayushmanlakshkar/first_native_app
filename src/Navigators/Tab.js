import { Text, View, Image, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Main/Home';
import Post from '../Screens/Main/Post';
import Reels from '../Screens/Main/Reels';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather'
import IconBadge from 'react-native-icon-badge';
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import Explore from '../Screens/Main/Explore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { usePostCreating,useUserDetails,useSearchOpen } from '../store';
import MyProfile from '../Screens/Main/MyProfile';

const MyTab = createBottomTabNavigator();

function Tab() {

  const { isKeyboardOpen, setKeyboardStatus } = useSearchOpen()
  const navigation = useNavigation();
  const { isPostCreating, setPostCreating } = usePostCreating()
const {userDetails}=useUserDetails();
  return (
    <MyTab.Navigator screenOptions=
      {{
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: "black",
          height: 50
        },
        tabBarStyle: {
          backgroundColor: "black",
          height: 55,
          display: isKeyboardOpen ? 'none' : "flex",
        },
        tabBarShowLabel: false

      }}>
  
      <MyTab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => {
            return <FoundationIcon name='home' size={27} color='white' />
          },
          headerTitle: '',
          headerLeft: () => {
            return <Image source={require('../assets/images/instagram.png')} tintColor="white"
              style={{
                height: 50,
                width: 120,
                marginLeft: 15
              }
              } />
          },
          headerRight: () => {
            return <>
              <View style={{ marginRight: 10, display: 'flex', flexDirection: 'row', gap: 20 }}>
                <IconBadge
                  MainElement={
                    <AntIcon name='hearto' size={27} color='white' />
                  }
                  BadgeElement={
                    <Text style={{ color: 'white' }}>{1}</Text>
                  }
                  IconBadgeStyle={
                    {
                      top: -4,
                      right: -10,
                      backgroundColor: '#FF0000'
                    }
                  }
                />

                <TouchableHighlight onPress={() => { navigation.push('Inbox') }}>
                  <IconBadge
                    MainElement={
                      <FeatherIcon name='message-circle' size={27} color='white' />
                    }
                    BadgeElement={
                      <Text style={{ color: 'white' }}>{1}</Text>
                    }
                    IconBadgeStyle={
                      {
                        top: -4,
                        right: -4,
                        backgroundColor: '#FF0000'
                      }
                    }
                  />
                </TouchableHighlight>
              </View>
            </>


          }
        }} />
      <MyTab.Screen name="Fyp" component={Explore}
        options={{
          tabBarIcon: () => {
            return <FeatherIcon name='search' size={27} color='white' />
          },
          headerShown: false,

        }}
      />
<MyTab.Screen name="Post" component={Post}
        options={{
          tabBarIcon: () => {
            return <FeatherIcon name='plus-square' size={27} color='white' />
          },
          tabBarStyle:{
            display:'none'
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          },
          headerTitle: "Create Post",
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={()=>{
                  setPostCreating()
                  navigation.navigate('Home')
                }}
                style={{marginLeft:10}}>
                <EntypoIcon name="cross" size={27} color='white' />
              </TouchableOpacity>
            )
          },
          headerRight:()=>{
            return (
              <TouchableOpacity
                onPress={()=>{
                  console.log("post")
                }}
                style={{marginRight:20}}>
                <AntIcon name="arrowright" size={27} color='white' />
              </TouchableOpacity>
            )
          }
        }}
      />
      <MyTab.Screen name="Reels" component={Reels}
        options={{
          tabBarIcon: () => {
            return <FeatherIcon name='play-circle' size={27} color='white' />
          }
          
        }}
      />

      <MyTab.Screen name="Profile" component={MyProfile}
        options={{
          tabBarIcon: () => {
            return <FeatherIcon name='user' size={27} color='white' />
          },
          headerTintColor:"white",
          headerTitle:userDetails.username,
          headerTitleStyle:{
            fontSize:23,
            fontWeight:'bold'
          },
          headerLeft:()=>{
            return (
            <View style={{marginLeft:15}}>
              <EntypoIcon name='lock' size={17} color='white'/>
              </View>)
          }
        }}
      />
    </MyTab.Navigator>
  );
}
export default Tab
