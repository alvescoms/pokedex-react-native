import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcons from 'react-native-vector-icons/MaterialIcons';

/**
 * Screens
 */
import Captured from '../../screens/Captured';
import Capture from '../../screens/Capture';

const TabStack = createBottomTabNavigator({
    Captured: {
        screen: Captured,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <MCIcons name='pokeball' size={45} color="#FFFFFF" />
        }
    },
    Capture: {
        screen: Capture,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <MIcons name='search' size={45} color="#FFFFFF" />
        }
    },
}, {
    headerMode: 'none',
    animationEnabled: true,
    tabBarOptions: {
        showLabel: false,
        inactiveBackgroundColor: '#dc0a2d',
        activeBackgroundColor: '#d00527',
        style: {
            borderTopColor: '#d00527',
            borderTopWidth: 2,
            backgroundColor: '#dc0a2d',
            height: 60
        }
    }
});

export default createAppContainer(TabStack);