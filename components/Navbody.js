import React , { Component } from 'react'
import { Text, View , TouchableHighlight , StyleSheet } from 'react-native'
import { Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class Navbody extends Component{

  render() {
    return (
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
        <Button transparent dark style={ {alignSelf: 'center' }}  onPress={ ()=> (this.props.navigation.navigate('Notif')) }>
          <Icon name='ios-notifications-outline'/>
        </Button>
      </Col>
      <Col>
        <Button transparent style={ {alignSelf: 'center' }} onPress={ ()=> (this.setState({Pages : 'Menu'})) } >
          <Icon name='menu'/>
        </Button>
      </Col>
    </Grid>
    );
  }

  
}

const styles = StyleSheet.create({
  configurations : {
    alignSelf: 'center'
  }
})
