import { AuthRoutes } from "./auth.routes";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from './app.routes';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

export function Routes() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
    });

    // Retorne uma função de cleanup para cancelar a subscrição ao sair do componente
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
    {
      userLoggedIn ? <AppRoutes /> : <AuthRoutes />
    }
    </NavigationContainer>
  );
}
