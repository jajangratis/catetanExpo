import React , { Component } from 'react'
import { Text, View , TouchableHighlight , StyleSheet , Image , FlatList} from 'react-native'
import { Card , Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button, CardItem } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { createStackNavigation  } from 'react-navigation'

export default class News extends Component{

  constructor(props){
    super(props)
    this.state = {
      myStatus : [
        {id:1 , username:'Ujang',userStatus:'Ini Status gue eaa',pic:'../assets/profiljpg2.jpg'},
        {id:2 ,username:'Melly',userStatus:'gue Artis SOsmed eaa',pic:'../assets/profilpng2.png'},
        {id:3 ,username:'Koko',userStatus:'gue sama dia putus',pic:'../assets/profiljpg1.jpg'},
        {id:4 ,username:'Andi',userStatus:'moba kok analog',pic:'../assets/profilpng2.png'},
        {id:5 ,username:'Kiki',userStatus:'Ini Status gue eaa',pic:'../assets/profilpng2.png'}
      ]
    }
  }

  render() {
    return (
      <List>
        <ListItem>
          <Grid>
            <Left>
              <Icon name='people'/>
            </Left>
            <Col>
            <Input placeholder="Write Something On Your Mind" style={{alignSelf:'center',width:200}}/>
            </Col>
            <Right>
              <Icon name='md-share-alt'/>
            </Right>
          </Grid>
        </ListItem>
        <ListItem itemDivider> 
          <Text>Stories</Text>
        </ListItem>
        <Grid padder>
          <FlatList
            horizontal
            data={this.state.myStatus}
            renderItem={({item , i}) => 
              <Col style={{width:100,height:100,alignContent:'center'}} key={i}>
                <Image source={require("../assets/icon.png")} style={{width:50,height:50}}/>
                <Text>{item.username}</Text>
              </Col>
            }
          />
        </Grid>
        <ListItem itemDivider/> 
        {this.state.myStatus.map((items, i)=>{
           return (
            <ListItem key={i}>
           <Card>
             <CardItem>
               <Left>
                 <Image source={require("../assets/icon.png")} style={{width:50,height:50}}/>
               </Left>
               <Body>
                 <Text style={{fontSize:15}}>{items.username}</Text>
               </Body>
               <Right>
                 <Icon name='menu'/>
               </Right>
             </CardItem>
             <CardItem>
               <Text>
                 {items.userStatus}
               </Text>
             </CardItem>
             <CardItem footer>
                 <Button transparent>
                   <Icon name='ios-thumbs-up-outline'/>
                   <Text> Like </Text>
                 </Button>
                 <Button transparent>
                   <Icon name='ios-paper-outline'/>
                   <Text> Comment </Text>
                 </Button>
                 <Button transparent>
                   <Icon name='md-share-alt'/>
                   <Text> Share </Text>
                 </Button>
             </CardItem>
           </Card>
         </ListItem>
           );
        })}
      </List>
    );
  }

  
}