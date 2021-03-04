import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile211695Navigator from '../features/UserProfile211695/navigator';
import Tutorial211694Navigator from '../features/Tutorial211694/navigator';
import NotificationList211666Navigator from '../features/NotificationList211666/navigator';
import Settings211665Navigator from '../features/Settings211665/navigator';
import Settings211657Navigator from '../features/Settings211657/navigator';
import UserProfile211655Navigator from '../features/UserProfile211655/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile211695: { screen: UserProfile211695Navigator },
Tutorial211694: { screen: Tutorial211694Navigator },
NotificationList211666: { screen: NotificationList211666Navigator },
Settings211665: { screen: Settings211665Navigator },
Settings211657: { screen: Settings211657Navigator },
UserProfile211655: { screen: UserProfile211655Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
