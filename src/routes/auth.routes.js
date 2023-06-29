import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import { SplashScreen } from "../screens/SplashScreen";


const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SplashScreen" component={SplashScreen}/>
            <Screen name="Login" component={Login}/>
            <Screen name="Cadastro" component={Cadastro}/>
        </Navigator>
    )
}