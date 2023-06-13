import React ,{Component} from 'react'
import { StyleSheet,Image,TextInput, Text, View,ScrollView,TouchableOpacity } from 'react-native';

export class Login extends Component{
  render(){
  return (
    <ScrollView style={styles.container}>
        <View style={styles.profilStyle}>
          <Text style={{fontWeight:'bold',fontSize:20,margin:'auto'}}>Let's Get Started !</Text>
          <Text>Put information for Create an account</Text>
        </View>


       <View style={styles.containInput}>
          <TextInput 
              placeholder='Username...'
              style={styles.input}
          />
          <TextInput 
              placeholder='Email...'
              style={styles.input}
          />
             <TextInput 
              placeholder='Phone...'
              style={styles.input}
          />
             <TextInput 
              placeholder='Password...'
              style={styles.input}
          />
       </View>

     
             <TouchableOpacity  style={styles.loginbtt} onPress={()=> this.props.navigation.navigate('HomeApp') }>
               <Text style={styles.txtLogin}>Create</Text>
           </TouchableOpacity>

      <View style={styles.register}>
           <View><Text>Already have an account?</Text></View>
           <View>
             <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login') } style={{marginTop:20}}>
               <Text style={styles.txtRegister}>Sing In</Text>
             </TouchableOpacity>
           </View>
     </View>
 
  <Text>dddddddddd</Text>
  </ScrollView>
  )
}
}




  
export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    paddingLeft:20,
    paddingRight:20,
    width:'auto',
  },
  profilStyle:{
    margin:'auto'
  },
  containInput:{
    width:'100%',
    margin:'auto',
    justifyContent:'center'
  },
  input: {
    border:'1px solid orange',
    margin:'auto',
    height:40,
    borderRadius:15,
    width:'90%',
    marginTop:15,
    paddingLeft:20,
    
  },
  loginbtt:{
    backgroundColor:'orange',
    width:'30%',
    height:40,
    borderRadius:20,
    margin:'auto'
  },
  txtLogin:{
    color:'white',
    fontWeight:'bold',
    margin:'auto'
  },
  register:{
    flexDirection:'row',
     justifyContent:'center',
     width:'80%',
     margin:'auto',
  },
  txtRegister:{
    fontWeight:'bold',
    color:'orange'
 },
  txtRddegister:{
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
    border:'1px solid orange',
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
    elevation: 3,
  }

  });