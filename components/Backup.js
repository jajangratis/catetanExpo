import React, { Component } from 'react';
import { StyleSheet, View , TouchableHighlight , StatusBar } from 'react-native';
import { Header , Content , Item , Input , Body , Container, Text , Left , Right , Title , Icon , Footer , FooterTab , Button, Switch} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { createStackNavigator  } from 'react-navigation'

import Navhead from './components/Navhead'
// import Navbody from './components/Navbody'
import Menus from './components/Menus'
import Notifications from './components/Notifications'
import News from './components/News'
import FriendsTab from './components/FriendsTab'
import Profiles from './components/Profiles'


export default class App extends Component{
    constructor(){
    super()
    this.state = {
      isDone : false,
      Pages : 'Profiles'
    }
  }
  render() {
    return (
      this.state.isDone ? (
        <Container style={{ paddingTop : StatusBar.currentHeight}}>

          {this.state.Pages === 'Profiles'  ? (
            <Header style={{backgroundColor: 'transparent'}} >
            <Grid>
            <Col size={1}>
              <Button transparent onPress={()=>(this.setState({Pages:'News'}))}>
                <Icon name="arrow-back" style={{color:'black'}}/>
              </Button>
            </Col>
            <Col size={3}>
              <Item style={{ width : 220 }}>
                <Icon name='search' style={{color:'black'}}/>
                <Input placeholder='Search Photo ' placeholderTextColor='black' />
              </Item>
            </Col>
            <Col />
            </Grid>
          </Header>
          ) : (
          <Navhead/>
        )}

          <Content>

            {this.state.Pages === "Profiles" ? (null):(
               <Grid style={{justifyContent:'center'}}>
               <Col>
                 <Button transparent dark  style={ {alignSelf: 'center' }}  onPress={ ()=> (this.setState({Pages : 'News'})) } >
                   <Icon name='ios-paper-outline'/>
                 </Button>
               </Col>
               <Col>
                 <Button transparent dark style={ {alignSelf: 'center' }} onPress={ ()=> (this.setState({Pages : 'FriendsTab'})) }>
                   <Icon name='people'/>
                 </Button>
               </Col>
               <Col>
                 <Button transparent dark style={ {alignSelf: 'center' }}  onPress={ ()=> (this.setState({Pages : 'Notifications'})) }>
                   <Icon name='ios-notifications-outline'/>
                 </Button>
               </Col>
               <Col>
                 <Button transparent style={ {alignSelf: 'center' }} onPress={ ()=> (this.setState({Pages : 'Menu'})) } >
                   <Icon name='menu'/>
                 </Button>
               </Col>
             </Grid>
            )}

            {this.state.Pages === "Menu"  ? (<Menus/>) : (null)}

            {this.state.Pages === "FriendsTab"  ? (<FriendsTab/>) : (null)}

            {this.state.Pages === "Notifications"  ? (<Notifications/>) : (null)}

            {this.state.Pages === "News"  ? (<News/>) : (null)}

            {this.state.Pages === "Profiles"  ? (<Profiles/>) : (null)}


          </Content>
        </Container>
    ):(
      null
    )
    );
  
    const styles = StyleSheet.create({
      configurations : {
        alignSelf: 'center'
      }
    })
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isDone : 'true'})
  }

  
}
