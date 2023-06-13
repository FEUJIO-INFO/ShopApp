import React, {useEffect} from 'react'
import {StyleSheet,ScrollView, FlatList, Text, View,ImageBackground,Pressable, Image } from 'react-native';
import { globalStyles } from '../styles/AppStyle';
import Colors from '../styles/Colors';
import img1 from './images/appa.jpg';
import img2 from './images/appa.jpg';
import img3 from './images/appa.jpg';
import img4 from './images/appa.jpg';
import img5 from './images/appa.jpg';
import img6 from './images/appa.jpg';
import img7 from './images/appa.jpg';

const Photos = ({navigation}) => {
     
  useEffect(()=>{
    console.log('photos est monte')
 return()=>{
   console.log('photos est demonte')
  }
});

const DATA=[
  {
      id:'1',
      name:'Petite Section',
      
      password:'#ID12345',
     
      desc:'Etudiante a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
     
      totalImg:'1',
      img:img1
  },
  {
      id:'2',
      name:'Moyenne Section',
     
      password:'#ID16345',
     
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
     
      totalImg:'2',
      img:img2
  },
  {
      id:'3',
      name:'Grande Section',
     
     
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
     
      totalImg:'3',
      img:img3
  },
  {
      id:'4',
      name:'SIL',
     
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Canada',
      totalImg:'4',
      img:img4
  },
  {
      id:'5',
      name:'CP',
     
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      totalImg:'5',
      img:img5
  },
  {
      id:'6',
      name:'CE1',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      totalImg:'6',
      img:img6
  },
  {
      id:'7',
      name:'CE2',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      totalImg:'7',
      img:img7
  },
];




   const renderProfiles=({item})=>{
         return(
            <View>
        <Pressable 
          // onPress={() =>navigation.push('PhotosInfo',item)}
           onPress={() =>navigation.navigate({
               routeName:'PhotosInfo',
               params:{
                name:item.name,
                country:item.country,
                totalImg:item.totalImg,
                username:item.username,
                phone: item.phone,
                password:item.password,
                poste:item.poste,
                desc:item.desc,
                country:item.country,
                totalImg:item.totalImg,
                img:item.img
               }
           })}

           style={({pressed}) => [
               {backgroundColor:pressed? Colors.clicked : Colors.white},
                globalStyles.root
           ]}

          >
                <Image
                  style={globalStyles.profilStylelist}
                  source={item.img}
               />
            

                   <View style={globalStyles.infoItems}>
                       <View>
                            <Text style={globalStyles.titleText2}> {item.name} </Text>
                            <Text style={globalStyles.titleText2}> {item.username} </Text>
                            <Text style={globalStyles.titleText2}> {item.phone} </Text>
                            <Text style={globalStyles.titleText2}> {item.poste} </Text>
                       </View>

                        <View>
                             <Text style={globalStyles.titleText2}>  {item.totalImg}</Text>
                        </View>
                   </View>

          </Pressable>
     </View>
          
         )
   }

   const render=({item})=>{
    return(
       <View style={ globalStyles.conscrol}>
          <View style={ globalStyles.two}>
          <Image
     // onPress={() =>navigation.push('PhotosInfo',item)}
       source={item.img}
      style={ globalStyles.scrol}

     />
          <Text style={globalStyles.titleText}> {item.name}</Text>
          </View>
      </View>
     
    )
}


  return (
    <View style={globalStyles.container}>
      <ScrollView>
      
  
           
           <Text style={globalStyles.titleText1}> You are Welcom</Text>

       <FlatList
             data={DATA}
             renderItem={renderProfiles}
             keyExtractor={item =>item.id}
             
          />

        </ScrollView>
    </View>
  )
}

Photos.navigationOptions={
  headerTitle:'SALES DE CLASSE',
  headerStyle:{
    backgroundColor:'green'
  },
  headerTintColor: Colors.white,
  headerTitleStyle:{
    fontWeight:'bold',
  },
  
}

export default Photos


const styles = StyleSheet.create({
   
    mainpress:{
       height:250,
       borderRadius:100,
       marginTop:10,
       flexDirection:'row',
       justifyContent:'space-around',
       shadowOffset: {width: -2, height: 4},  
       shadowColor: 'green',  
       shadowOpacity: 0.2,  
       shadowRadius: 3,
       elevation: 3,
     },
    
     txt: {
          fontFamily:'  InriaSans_400Regular_Italic,',
          fontWeight:'bold'
      },
      back: {
        borderRadius:100,
    },
      txt1: {
        fontFamily:'  InriaSans_400Regular_Italic,',
        fontWeight:'bold',
        marginTop:40
    },
     
  });