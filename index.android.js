import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Button,
  ControlPanel,
  MainView
} from 'react-native';



export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);

  }
  closeControlPanel = () => {
    this._drawer.closeDrawer()
  };
  openControlPanel = () => {
    this._drawer.openDrawer()
  };

  render() {
    var navigationView = (
      <View style={navigationStyles.view}>
        <Text style={navigationStyles.text}>I'm in the Drawer!</Text>
         <Button
            onPress={() => { this.closeControlPanel() } }
            title="CLOSE"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={(ref) => this._drawer = ref}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            onPress={() => { this.openControlPanel() } }
            title="Open"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const navigationStyles = {
  view: { flex: 1, backgroundColor: '#fff'},
  text: { margin: 10, fontSize: 15, textAlign: 'left' }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
