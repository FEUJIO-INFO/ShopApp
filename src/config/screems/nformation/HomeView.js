import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Listepoke } from '../data/pokemonList';
import { Pokemon } from '../models/pokemon';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';


const HomeView = () => {

    const [compteurPokedesk, setCompteurPokedesk] = useState(0);
    const [ListePoke, setListePoke] = useState([]);

    const getMainPokemon =(namePokemon:string)=>{
        console.log("my names is",namePokemon); 
    }

    const onNext = () => {
        if (compteurPokedesk === Listepoke.length - 1) {
            setCompteurPokedesk(0);
        }
        else {
            setCompteurPokedesk(compteurPokedesk + 1)
        }
    }
    const onPreviews = () => {
        if (compteurPokedesk === 0) {
            setCompteurPokedesk(Listepoke.length - 1);
        }
        else {
            setCompteurPokedesk(compteurPokedesk - 1)
        }
    }

    return (
        <View>
            <PokemonInfo id={Listepoke[compteurPokedesk].id} names={Listepoke[compteurPokedesk].names} 
            level={Listepoke[compteurPokedesk].level} isMale={Listepoke[compteurPokedesk].isMale} src={Listepoke[compteurPokedesk].src} onclickPokemon={getMainPokemon} />
            <Text style={styles.text}>le nouveau compeut {compteurPokedesk}</Text>
            <View style={styles.contentButton} >
                <Button title='Previews' onPress={onPreviews} />
                <Button title='Next' onPress={onNext} />
            </View>
            
            <FontAwesomeIcons name="print" size={20} color={'red'}/>

        </View>
    );
};



const PokemonInfo = ({ id, names, level, isMale, src,onclickPokemon }, Pokemon) => {

    
    return (
        <View>
            <Text style={styles.text1}> Liste de pokemon</Text>
           <View style={styles.contentText}>
           <Text style={styles.text}>this is a pokemon</Text>
            <Text style={styles.text}>my names is {names}, j'ai le niveau {level}.</Text>
            {isMale ?
                <Text style={styles.text}>je suis un male</Text>
                : <Text style={styles.text}>je suis une femmele </Text>}
           </View>

            <TouchableOpacity
                onPress={()=>onclickPokemon(names)}
                style={styles.tbutton}
            >
                <Image source={src} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
};
export default HomeView

const styles = StyleSheet.create({
     image: {
         width: 100,
         height: 100,
         borderRadius: 20,
         alignItems: "center"
     },
     contentButton: {
         flex: 1,
         flexDirection: "row",
         justifyContent: "space-around",
         margin:10
     },
    text1:{
        color:"red",
        fontSize:30,
        alignItems:"center",
        margin:20,
    },
    tbutton:{
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        
        padding:10,
    },
    contentText:{
        justifyContent:"center",
        textAlign:"center",
       
    },
    text:{
        fontSize:20,
        color:"yello"
    }
})