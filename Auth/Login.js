import React ,{Component} from 'react'
import { StyleSheet,Image,TextInput, Text, View,ScrollView,TouchableOpacity } from 'react-native';

export class Login extends Component{
  render(){
  return (
    <ScrollView style={styles.container}>
        <View style={styles.profilStyle}>
           <Image style={{with:220,height:220}}
              source={require('../images/Login.png')}
              resizeMode="contain"
             />
          <Text style={{fontWeight:'bold',fontSize:20,margin:'auto'}}>Welcom back</Text>
          <Text>put your information account to connect</Text>
        </View>


       <View style={styles.containInput}>
          <TextInput 
              placeholder='email...'
              style={styles.input}
          />
          <TextInput 
              placeholder='Password...'
              style={styles.input}
          />
          <Text style={{textAlign:'right', marginRight:25,fontWeight:'bold',marginTop:10}}>Forgot Password?</Text>
       </View>

     
             <TouchableOpacity  style={styles.loginbtt} onPress={()=> this.props.navigation.navigate('HomeApp') }>
               <Text style={styles.txtLogin}>Login</Text>
           </TouchableOpacity>

      <View style={styles.register}>
           <Text style={{marginTop:20}}>Don't have an account?</Text>
        
             <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register') } style={{marginTop:20}}>
               <Text style={styles.txtRegister}>Sing Up</Text>
             </TouchableOpacity>
           
     </View>
 
  </ScrollView>
  )
}
}




  
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
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
    margin:'auto',
    marginTop:20
  },
  txtLogin:{
    color:'white',
    fontWeight:'bold',
    margin:'auto'
  },
  register:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    textAlign:'center',
     width:'60%',
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