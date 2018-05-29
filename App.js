import React, { Component } from 'react';
import { StyleSheet, View , TouchableHighlight , StatusBar , Image } from 'react-native';
import { Header , Content , Item , Input , Body , Container, Text , Left , Right , Title , Icon , Footer , FooterTab , Button, Switch} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { StackNavigator  } from 'react-navigation'

import Navhead from './components/Navhead'
import Navbody from './components/Navbody'
import Menus from './components/Menus'
import Notifications from './components/Notifications'
import News from './components/News'
import FriendsTab from './components/FriendsTab'
import Profiles from './components/Profiles'
import Market from './components/Market'


export default class App extends Component{
    constructor(){
    super()
    this.state = {
      isDone : false,
      Pages : 'Profiles'
    }
  }

  handleSpesial(){
      alert('Karena Ga ada messenger jadi ke profil aja')
      {this.setState({Pages:'Profiles'})}
  }

  handlePage(page){
    switch (page) {
      case "News":
        return <News/>
        break;
      case "FriendsTab":
        return <FriendsTab/>
        break;
      case "Market":
        return <Market/>
        break;
      case "Notifications":
        return <Notifications/>
        break;
      case "Menus":
        return <Menus/>
        break;
      case "Profiles":
        return <Profiles/>
        break;
    
      default:
        return
        <Profiles/>
        break;
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
            <Header>
            <Left>
              <Button transparent onPress={()=>(alert('Ini Kamera'))}>
                <Icon name='camera' style={{color:'white'}}/>
              </Button>
            </Left>
            <Body>
              <Item style={{ width : 200 }}>
                <Icon name='search' style={{color:'white'}}/>
                <Input placeholder='Search' placeholderTextColor='white' />
              </Item>
            </Body>
            <Right>
              <Button transparent onPress={()=>(this.handleSpesial())}>
                <Image source={require('./assets/messenger-logo.png')} style={{width:30 , height:30}}/>
              </Button>
            </Right>
            </Header>
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
                   <Icon name='ios-people-outline'/>
                 </Button>
               </Col>
               <Col>
                 <Button transparent dark style={ {alignSelf: 'center' }} onPress={ ()=> (this.setState({Pages : 'Market'})) }>
                 <Icon name='people'/>
                 </Button>
               </Col>
               <Col>
                 <Button transparent dark style={ {alignSelf: 'center' }}  onPress={ ()=> (this.setState({Pages : 'Notifications'})) }>
                   <Icon name='ios-notifications-outline'/>
                 </Button>
               </Col>
               <Col>
                 <Button transparent style={ {alignSelf: 'center' }} onPress={ ()=> (this.setState({Pages : 'Menus'})) } >
                   <Icon name='menu'/>
                 </Button>
               </Col>
             </Grid>
            )}

            {/* {this.state.Pages === "Menus"  ? (<Menus/>) : (null)}

            {this.state.Pages === "FriendsTab"  ? (<FriendsTab/>) : (null)}

            {this.state.Pages === "Notifications"  ? (<Notifications/>) : (null)}

            {this.state.Pages === "Market"  ? (<Market/>) : (null)}

            {this.state.Pages === "News"  ? (<News/>) : (null)}

            {this.state.Pages === "Profiles"  ? (<Profiles/>) : (null)} */}
            
            {this.handlePage(this.state.Pages)}

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
