import React from "react";
import MainNavigator from './routes/DrawerNav';
import StackNav from './routes/HomeStackNav';
import BottomTabNav from './routes/NavigationTab';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Auth/Login';
import Register from'./Auth/Register';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';
import Home from './Screems/Home'


function CustumHeader({title , isHome , navigation}){
  return(
   <View style={{flexDirection:'row',width:150, height:50}}>
      <View  style={{flex:1,justifyContent:'center'}}>
      {
        isHome? 
        <TouchableOpacity  onPress ={() => navigation.openDrawer()}>
           <Image style={{with:30,height:30,marginLeft:5}}
              source={require('./images/menu.png')}
               resizeMode="contain"
            />
        </TouchableOpacity>    
        :
      <TouchableOpacity 
           onPress ={() => navigation.goBack()} 
      >
         <Image style={{with:25,height:25,marginLeft:5}}
           source={require('./images/back.png')}
           resizeMode="contain"
         />
       </TouchableOpacity> 
      }
     </View>

       <View style={{flex:1.5,justifyContent:'center'}}>
         <Text style={{textAlign:'center'}}>{title}</Text>
       </View>
   </View>
  )
}
function LoginScreen({navigation}) {
  return (
          <Login navigation={navigation}/>   
  );
}
function RegisterScreen({navigation}) {
  return (
     <View style={{backgroundColor:'white'}}>
        <CustumHeader title="Register"  navigation={navigation}/>
        <Register navigation={navigation}/>
     </View>
  );
}
function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
        <CustumHeader title="Home" isHome={true} navigation={navigation}/>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{flex:1, justifyContent:'center' , textAlign:'center'}}>Home!</Text>
           <TouchableOpacity onPress={()=> navigation.navigate('Home') } style={{marginTop:20}}>
               <Text>Go to Home Detail</Text>
               <Home/>
           </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView>
        <CustumHeader title="Home Detail" navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{flex:1, justifyContent:'center' , textAlign:'center'}}>Home Detail!</Text>
        </View>
    </SafeAreaView>
  );
}
function SettingsScreen({navigation}) {
  return (
    <SafeAreaView>
    <CustumHeader title="Setting" isHome={true} navigation={navigation}/>
    <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{flex:1, justifyContent:'center' , textAlign:'center'}}>Setting!</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('SettingDetail') } style={{marginTop:20}}>
               <Text>Go to Setting Detail</Text>
        </TouchableOpacity>
    </View>
</SafeAreaView>
  );
}

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView>
    <CustumHeader title="Setting Detail" navigation={navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{flex:1, justifyContent:'center' , textAlign:'center'}}>Setting Detail!</Text>
    </View>
</SafeAreaView>
  );
}
const Stack = createStackNavigator();
const StackApp = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptionHandler =()=>({
  headerShown:false
})

const navOptionBadge =()=>({
  tabBarBadge: 3,
  headerShown:false
})

function HomeStack(){
  return(
     <Stack.Navigator initialRouteName='HomeScreen' >
       <Stack.Screen name='HomeScreen' component={HomeScreen} options={navOptionHandler}/>
       <Stack.Screen name='HomeDetail' component={HomeScreenDetail} options={navOptionHandler}/>
     </Stack.Navigator>

  )
}
function SettingStack(){
  return(
     <Stack.Navigator initialRouteName='Setting'>
       <Stack.Screen name='Setting' component={SettingsScreen} options={navOptionHandler}/>
       <Stack.Screen name='SettingDetail' component={SettingsScreenDetail} options={navOptionHandler}/>
     </Stack.Navigator>

  )
}

function NotificationsScreen({ navigation }) {
  return (
        <SafeAreaView>
        <CustumHeader title="Setting Detail" navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>Notification Detail!</Text>
        </View>
    </SafeAreaView>
      )
}

const Drawer = createDrawerNavigator();

function TabNavigator (){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeStack}  options={navOptionHandler}/>
    <Tab.Screen name="Settings" component={SettingStack}  options={navOptionBadge}/>
  </Tab.Navigator>
  )
}

function CustumDrawerContent(props){
  return(
     <SafeAreaView style={{flex:1}}>
        <View style={{ height:150,width:150,margin:'auto'}}>
        <Text>tiojio</Text>
        <Image style={{with:110,height:110,borderRadius:0}}
              source={require('./images/profil.png')}
         />
        </View>
        <ScrollView style={{marginLeft:20}}>
           <TouchableOpacity 
              onPress ={() => props.navigation.navigate('Home')} 
             >
               <Text>Home</Text>
            </TouchableOpacity> 

            <TouchableOpacity 
               onPress ={() => props.navigation.navigate('Notifications')} 
             >
                <Text>Notifications</Text>
             </TouchableOpacity>
      </ScrollView>
     </SafeAreaView>
  )
}

function DrawerNavigator (){
  return(
    <Drawer.Navigator 
    initialRouteName="Home"  
    drawerContent={props => CustumDrawerContent(props)}
>
    <Drawer.Screen name="Home" component={TabNavigator}  options={navOptionHandler}/>
     <Drawer.Screen name="Notifications" component={NotificationsScreen}  options={navOptionHandler}/>
</Drawer.Navigator>
  )
}




export default function App (){

  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });
  <NavigationContainer>
  <StackApp.Navigator initialRouteName='Login' >
      <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler}/>
      <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandler}/>
      <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandler}/>
 </StackApp.Navigator>
</NavigationContainer>
  if(!fontsLoaded){
      return <AppLoading/>
  }else{
    return  <BottomTabNav/>
  }
}



