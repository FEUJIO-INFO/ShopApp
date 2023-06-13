import React ,{useEffect} from 'react'
import { StyleSheet,Image, Text, View,Button,TextInput,ScrollView } from 'react-native';
import { globalStyles } from '../styles/AppStyle';
import Colors from '../styles/Colors';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import MaterialIconsHeader from '../Components/MaterialIconsHeader'

const PhotosInfo = ({navigation}) => {

  return (
    <ScrollView >
              <Image
                  style={styles.profilStyle}
                  source={navigation.getParam('img')}
               />
       
     <View style={styles.container}>
        <Text style={styles.txt}>Name</Text>
       <TextInput
            style={styles.input}
            value={navigation.getParam('name')}
          />

       <Text style={styles.txt}>UserName</Text>
       <TextInput
            style={styles.input}
            value={navigation.getParam('username')}
          />

         <Text style={styles.txt}>Phone</Text>
         <TextInput
            style={styles.input}
            value={navigation.getParam('phone')}
          />

         <Text style={styles.txt}>password</Text>
         <TextInput
            style={styles.input}
            value={navigation.getParam('password')}
          />

       
     
        
       <View style={styles.bttncontainer}>
          <View style={styles.bttnsave}>
             <Button color='orange' title='save'></Button>
          </View>
          <View style={styles.bttncancel}>
             <Button color='orange' title='Cancel'></Button>
          </View>
      </View> 
      <Text>.</Text>
    </View>
  </ScrollView>
  )
}




  PhotosInfo.navigationOptions=(navigationData)=>{
     const name = navigationData.navigation.getParam('name');
     return{
      headerTitle:name,
      headerStyle:{
        backgroundColor:Colors.headerback
      },
      headerTintColor: Colors.white,
      headerTitleStyle:{
        fontWeight:'bold',
      },
      headerRight:()=>(
       <HeaderButtons
         HeaderButtonComponent={MaterialIconsHeader}
       >
           <Item
              title='infoss'
              iconName='info-outline'
              onPress={()=>alert(' plus jinformation sur '+name)}
           />

            <Item
              title='infoss'
              iconName='mail'
              onPress={()=>alert(' plus jinformation sur '+name)}
           />
       </HeaderButtons>
     )
     }
  }


export default PhotosInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    marginTop:-50,
    paddingLeft:20,
    paddingRight:20,
    width:'auto',
    borderRadius:20
  },
  profilStyle:{
    width:'auto',
    height:'250px'
  },
  input: {
    border:'1px solid black',
    height:40,
    borderRadius:5,
    width:'100%',
    marginTop:15,
    paddingLeft:15
  },
  txt:{
    fontWeight:'bold',
    marginTop:25,
  },
  bttncontainer:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginTop:20
  },
  bttnsave:{
    width:'45%',
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
    elevation: 3,
  },
  bttncancel:{
    width:'45%',
    color:'orangered',
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
    elevation: 3,
  }

  });