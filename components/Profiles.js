import React , { Component } from 'react'
import { StyleSheet, Text, View , TouchableHighlight , ImageBackground , screenWidth , screenHeight , Image } from 'react-native'
import { Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button , Form , Card , CardItem } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FlatList } from 'react-native-gesture-handler';

export default class Profiles extends Component{

  constructor(){
    super()
    this.state = {
      friends:[
      {nama:'Ujang',foto:'../assets/icon.png'},
      {nama:'Kiki',foto:'../assets/icon.png'},
      {nama:'Andi',foto:'../assets/icon.png'},
      {nama:'Koko',foto:'../assets/icon.png'},
      {nama:'Rifki',foto:'../assets/icon.png'},
      {nama:'Elly',foto:'../assets/icon.png'}
      ],
      myStatus:[
        {status:'Bikin Fb pake React Native',time:'5 Minutes ago'},
        {status:'Status gw yang lain',time:'5 Days ago'},
      ],
      fotoku : [
        {nama:'foto A',pic:''},
        {nama:'foto B',pic:''},
        {nama:'foto C',pic:''},
        {nama:'foto D',pic:''}
    ]
    }
  }

  render() {
    return (
        <Grid>
          <Row>
            <Image source={require('../assets/profilpng2.png')} style={{width:'100%',height:150}}/>
          </Row>
          <Row style={{marginTop:-2}}>
            <Image source={require('../assets/profilpng1.png')} style={{marginTop:-120,position:'absolute',width:100,height:100,left:0,right:0,marginLeft:'27%',marginVertical
            :'15%'}} />
            <Col style={styles.centerItems}>
              <Text style={{fontSize:30}}>Trian Afiansyah</Text>
              <Text note>My Bio</Text>
            </Col>
          </Row>
          <Row >
            <Col style={styles.centerItems}>
              <Icon name='ios-menu-outline'/>
              <Text note>Activity Log</Text>
            </Col>
            <Col style={styles.centerItems}>
              <Icon name='ios-person-outline'/>
              <Text note>Update Info</Text>
            </Col>
            <Col style={styles.centerItems}>
              <Icon name='ios-eye-outline'/>
              <Text note>View As</Text>
            </Col>
            <Col style={styles.centerItems}>
              <Icon name='menu' style={{borderRadius:10}}/>
            </Col>
          </Row>
          {/* LLLL */}
            <Grid style={{marginTop:10,marginLeft:10}}>
              <Row>
                <Icon name='ios-home-outline'/>
                <Text> Lives in Tangerang</Text>
              </Row>
              <Row>
                <Icon name='ios-home-outline'/>
                <Text> Single</Text>
              </Row>
              <Row>
                <Icon name='ios-map-outline'/>
                <Text> From Tangerang</Text>
              </Row>
              <Row>
                <Icon name='ios-person-outline'/>
                <Text > Followed by 20 people</Text>
              </Row>
              <Row >
                <Button transparent style={styles.centerItems}>
                  <Text style={styles.textCenter}>EDIT DETAILS</Text> 
                </Button>
              </Row>
            </Grid>
            <Row style={{backgroundColor:'grey'}}>
              <Col style={styles.centerItems}>
                <Button transparent style={{width:100}}>
                  <Text style={[{fontWeight:'bold'},styles.textCenter]}>ABOUT</Text>
                </Button>
              </Col>
              <Col>
                <Button transparent style={{width:100}}>
                  <Text style={styles.textCenter}>PHOTOS</Text>
                </Button>
              </Col>
              <Col>
                <Button transparent style={{width:100}}>
                  <Text style={styles.textCenter}>FRIENDS</Text>
                </Button>
              </Col>
            </Row>
            <List>
              <ListItem itemDivider/>
              <ListItem>
                <Col>
                  <Form>
                    <Item>
                      <Icon name='star' />
                      <Input placeholder="What's on your mind?"/>
                    </Item>
                  </Form>
                </Col>
                </ListItem>
                <ListItem>
                  <Left>
                    <Icon name='star'/>
                    <Text>Live</Text>
                  </Left>
                  <Body style={{flexDirection:'row'}}>
                    <Icon name='star'/>
                    <Text style={styles.centerItems}>Photo</Text>
                  </Body>
                  <Right style={{flexDirection:'row',width:60}}>
                    <Icon name='star'/>
                    <Text>Life Event</Text>
                  </Right>
              </ListItem>

              <ListItem itemDivider/>

              <ListItem>
                <Grid>
                  <Row style={styles.screenConf}>
                    <Left>
                      <Icon name='people'/>
                      <Text>Photo</Text>
                    </Left>
                    <Right>
                      <Button transparent style={{width:80}}>
                        <Text>Add Photo</Text>
                      </Button>
                    </Right>
                  </Row>
                  <Row>
                        <Row>
                            <FlatList data={this.state.fotoku} numColumns={2} renderItem={({item})=>
                                <Item>
                                    <Image source={require('../assets/icon.png')} style={{width:150,height:150} } foto={item.nama}/>
                                </Item>
                            }/>
                        </Row>
                  </Row>
                  <Row style={{alignSelf:'center'}}>
                    <Text >See All Your Photo</Text>
                  </Row>
                </Grid>
              </ListItem>

              <ListItem itemDivider/>

              <ListItem>
                <Grid>
                  <Row style={styles.screenConf}>
                    <Left>
                      <Icon name='people'/>
                      <Text>Friends</Text>
                    </Left>
                    <Right>
                      <Button transparent style={{width:100}}>
                        <Text>FIND FRIENDS</Text>
                      </Button>
                    </Right>
                  </Row>
                  <Row>
                      <FlatList
                      data = {this.state.friends}
                      renderItem = {({item})=>
                          <Col>
                            <Image source={require('../assets/icon.png')} style={{width:80,height:80}}/>
                            <Text>{item.nama}</Text>
                          </Col>
                      }
                      numColumns={3}
                      />
                  </Row>
                  <Row style={{alignSelf:'center'}}>
                    <Text >See All Friends</Text>
                  </Row>
                </Grid>
              </ListItem>

              <ListItem itemDivider/>

              <ListItem>
                <Left>
                  <Icon name='people'/>
                  <Text>Did You Know</Text>
                </Left>
                <Right>
                  <Button transparent style={{width:100}}>
                    <Text>ADD ANSWER</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem itemDivider/>
              <ListItem>
                <Left>
                  <Icon name='people'/>
                  <Text>FILTERS</Text>
                </Left>
                <Right>
                  <Button transparent style={{width:100}}>
                    <Text>MANAGE POSTS</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem itemDivider/>
            </List>
            {this.state.myStatus.map((item,i)=>{
              return(
                <List key={i}>
                <ListItem itemDivider/>
                <ListItem>
              <Card>
                <CardItem>
                  <Left>
                    <Image source={require("../assets/profilpng1.png")} style={{width:50,height:50}}/>
                  </Left>
                  <Body>
                    <Text style={{fontSize:15,width:140,alignItems:'center'}}>Trian Afiansyah</Text>
                    <Text note>{item.time}</Text>
                  </Body>
                  <Right>
                    <Icon name='menu'/>
                  </Right>
                </CardItem>
                <CardItem>
                  <Text>
                   {item.status}
                  </Text>
                </CardItem>
                <CardItem footer>
                    <Grid>
                      <Row>
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
                      </Row>
                      <Row style={{width:screenWidth}}>
                        <Content>
                          <Item rounded>
                            <Input placeholder='Write a comment...'/>
                            <Icon name='camera'/>
                            <Image source={require("../assets/smile.png")} style={{width:25,height:25}}/>
                          </Item>
                        </Content>
                      </Row>
                    </Grid>
                </CardItem>
              </Card>
              </ListItem>
              </List>
              );
            })}
          {/* LLLL */}
        </Grid>
    );

    
  }
}

const styles = StyleSheet.create({
  centerItems:{
    alignItems: 'center',
    alignContent: 'center',
  },
  screenConf:{
    width: screenWidth ,
  },
  textCenter:{
    textAlign:'center'
  }
})

