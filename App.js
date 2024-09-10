import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import WelcomeNavigator from './app/navigation/WelcomeNavigator';

export default function App() {
  
  return (
   
    <NavigationContainer theme={navigationTheme}>
      <WelcomeNavigator/>
    </NavigationContainer>

  );
}

