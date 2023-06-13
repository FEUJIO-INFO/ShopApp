import { createNativeStackNavigator} from  "@react-navigation/"
import { NavigationContainer } from "react-navigation"



import Homme from "./screems/Homme"
import Add from "./screems/Add";
const Stack  = createNativeStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Homme" component={Homme}/>
            <Stack.Screen 
            name="Add"
             component={Add}
             options={{presentation:'modal'}}
             />
 
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}