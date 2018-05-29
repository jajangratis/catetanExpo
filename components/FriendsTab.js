import React , { Component } from 'react'
import { Text, View , TouchableHighlight , StyleSheet , Image} from 'react-native'
import { Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class FriendsTab extends Component{

  constructor(){
    super()
    this.state = {
      myFriendsReq : [
        {nama:'Mono'},
        {nama:'Anto'}
      ]
    }
  }

  render() {
    return (
            <List>
            <ListItem itemDivider>
              <Text style={{color:'grey'}}>Friends Requests</Text>
            </ListItem>  
            {this.state.myFriendsReq.map((items , i)=>{
              return(
                <ListItem avatar key={i}>
                  <Left>
                  <Image source={require('../assets/messenger-logo.png')}  style={{width: 50, height: 50}}/>
                  </Left>
                  <Body>
                    <Text style={{fontSize:25}}>{items.nama}</Text>
                    <Text note >1 Mutual Friends</Text>
                    <Grid>
                        <Col>
                            <Button primary style={styles.tabSize}><Text style={styles.textConf}> Confirm </Text></Button>
                        </Col>
                        <Col>
                            <Button bordered light style={styles.tabSize}><Text> Delete </Text></Button>
                        </Col>
                    </Grid>
                  </Body>
                  <Right/>
                </ListItem>
              );
            })}
          </List>
    );
  }

  
}

const styles = StyleSheet.create({
  tabSize : {
    width : 90,
    justifyContent: 'center'
  },
  textConf :{
      color : 'white'
  }
})