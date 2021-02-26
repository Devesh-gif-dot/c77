import React from 'react';
import LottieView from 'lottie-react-native'

export default class SantaAni extends React.Component{
    render(){
        return(
            <LottieView style={{width:"60%"}}
             source={require('../assets/13015-santa-claus.json')}
             autoPlay loop
            />
        );
    }
}