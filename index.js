import React from 'react';
import {View,Text} from 'react-native';
import { RNCamera } from 'react-native-camera';


const IconWithText = (props) =>{
    return(
        <View>
            <View style={{width:60,height:60,backgroundColor:'green',borderRadius:60}}></View>
            <Text style={{maxWidth:70,textAlign:'center',marginTop: 10,alignSelf:'center'}}>{props.title}</Text>
        </View>
    );
}

const IconActions = () => {
    return(
        <View style={{backgroundColor:'#ffffff',width:35,height:35,borderRadius:35,marginRight:20}}>
        </View>
    )
}

const scanQRcode = () =>{
    return(
        <View style={{flex: 1}}>
            <View style={{flex:1,backgroundColor: 'gray'}}>
                <View style={{position:'absolute',flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:10}}>
                    <IconActions></IconActions>
                    <View style={{flexDirection:'row'}}>
                    <IconActions></IconActions>
                    <IconActions></IconActions>
                    </View>
                </View>
                <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={{flex: 1, position:'relative'}}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
        />
            </View>
            <View style={{height:200,backgroundColor:'white',paddingHorizontal: 20}}>
                <Text style={{color:"#323232",fontSize:25,alignSelf:'center',marginTop:30}}>Arahkan camera pada QR code</Text> 
            </View>
        </View>
    );
}

export default scanQRcode