/**
 * Created by xh on 2018/8/3.
 */
import ImagePicker from 'react-native-image-crop-picker';
import React, {Component} from 'react';

import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.state = {
            visible:false,
            imageUrl: require('../../static/images/avatar.jpg')
        };
    }


    open() {
        console.log(111)
        this.setState({visible: true})
    }
    _beginUpImage = () => {
        let params = {
            path: '',    //本地文件地址
        };
        this.uploadImage('uploadImage', params)
            .then(res => {
                console.log('success');
            }).catch(err => {
            //请求失败
            console.log('flied');
        })
    };

    uploadImage = (url, params) => {
        return new Promise(function (resolve, reject) {
            let ary = params.path.split('/');
            console.log('2222222' + ary);
            let formData = new FormData();
            let file = {uri: params.path, type: 'multipart/form-data', name: ary[ary.length - 1]};
            formData.append("file", file);
/*
            fetch('http://localhost:8010/birds/' + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'identity'
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
                .then((responseData) => {
                    console.log('uploadImage', responseData);
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('err', err);
                    reject(err);
                });*/
        });
    };

    //从相册中选择单张图片：
    _openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            console.log("111111" + image['data']);
            this.setState({
                imageUrl: {uri: image['path']}
            });
        })
    };
    //从相册中选择多张图片：
    _openTwoPicker = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    };
    //拍照：
    _openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    };

    render() {
        return <View style={{flex: 1, backgroundColor: '#aaffaa', alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 300, height: 300}}
                       source={this.state.imageUrl}/>

                <TouchableOpacity style={{width: 80, height: 60, backgroundColor: '#ffaaaa', marginTop: 20}}
                                  onPress={this._openPicker}>
                    <Text>从相册中选择单张图片</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 80, height: 60, backgroundColor: '#ffaaaa', marginTop: 20}}
                                  onPress={this._openTwoPicker}>
                    <Text>从相册中选择多张图片</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 80, height: 60, backgroundColor: '#ffaaaa', marginTop: 20}}
                                  onPress={this._openCamera}>
                    <Text>拍照</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 80, height: 60, backgroundColor: '#ffaa00', marginTop: 20}}
                                  onPress={this._beginUpImage}>
                    <Text>上传图片</Text>
                </TouchableOpacity>
            </View>
    }


}