import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

import { Container, Body, Title,Header, Right,Fab,Icon, Button} from "native-base";

 const orderslist ={
  "id":1,
  "ordername":"Home/Office Delivery",
  "user":"Mike Tyson",
  "orderId":"#456672556",
  "orderStatus":"pending",
  "bookDate":"June 19, 2020",
  "scheduleDate":"June 21, 2020",
  "address":"Worth Dallas, Texas",
  "image":"https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-luke.png",
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
};

export default class Details extends Component {
  constructor(props) {
    super(props);
    
    console.log("came here");
    console.log(props);
    console.log(this.props.route.params.data);
    console.disableYellowBox = true;
    this.state={
        newdata:this.props.route.params.data,
        phoneNumber:this.props.route.params.data.phone
    }
    this.getPhoneNumber(this.props.route.params.data);
  }

 getPhoneNumber(data){
    var str = data.phone;
    var res = str.split(" ");
    console.log(res[0]);
    this.setState({
        phoneNumber: res[0]
      });
      console.log(this.state.phoneNumber);
 }
  
  render() {
    console.log(this.state.phoneNumber);
    return (
        <Container> 
        <Header androidStatusBarColor="#8FE6F8"  style={{backgroundColor:"#8FE6F8"}}>
            <Body>
                <Title>DETAILS</Title>
            </Body>
            
        </Header>
        <ScrollView>
            <View style={{marginLeft: 15,marginRight: 15,}}>
                
                <View style={{marginTop: 15,flexDirection:'row'}}>
                    <View style={{flex: 1,flexDirection:'column'}}>
                        <Text style={{color:'gray',fontSize:14}}>Name</Text>
                        <Text style={{color:'black',fontSize:16}}>{this.state.newdata.name}</Text>
                    </View>
                    <View style={{flex: 1,flexDirection:'column'}}>
                        <Text style={{color:'gray',fontSize:14}}>Email</Text>
                        <Text style={{color:'black',fontSize:16}}>{this.state.newdata.email}</Text>
                    </View>
                </View>
                <View style={{marginTop: 15,flexDirection:'row'}}>
                    <View style={{flex: 1,flexDirection:'column'}}>
                        <Text style={{color:'gray',fontSize:14}}>PhoneNumber</Text>
                        <Text style={{color:'black',fontSize:16}}>{this.state.phoneNumber}</Text>
                    </View>
                    <View style={{flex: 1,flexDirection:'column'}}>
                        <Text style={{color:'gray',fontSize:14}}>Website</Text>
                        <Text style={{color:'black',fontSize:16}}>{this.state.newdata.website}</Text>
                    </View>
                </View>
                
            </View>
            
      
        </ScrollView>
        </Container>
     
    );
  }
}
