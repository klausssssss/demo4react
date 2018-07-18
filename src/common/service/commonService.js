import React, { Component } from 'react';
import config from '../config'
var  commonService = {
     
    headers :  {
        Accept: 'application/json',
        Authorization:' '
    },

    get(url,data,successfuction,errorfunction,that){
        that && that.setState({isLoad: true});
        if (data) {
            let paramsArray = [];
            //拼接参数
            Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(config.url + url, {
            method: "GET",
            mode: "no-cors",
            headers:this.headers
        }).then((res)=>{
            that && that.setState({isLoad: false});
            if(res.status === '200'){
                successfuction && successfuction(res);
            }
            else{
                errorfunction && errorfunction(res);
            }
        }).catch((e)=>{
            //throw e;
            that && that.setState({isLoad: false});
        })
    },

    post(url,data,successfuction,errorfunction,that){
        that && that.setState({isLoad: true});
        fetch(config.url + url, {
            method: "POST",
            mode: "no-cors",
            headers:this.headers,
            body:data
        }).then((res)=>{
            that && that.setState({isLoad: false});
            if(res.status === '200'){
                successfuction && successfuction(res);
            }
            else{
                errorfunction && errorfunction(res);
            }
        }).catch((e)=>{
            //throw e;
            that && that.setState({isLoad: false});
        })
    },

    pagerpost(url,data,successfuction,errorfunction,pageIndex,pageSize,that){
        that && that.setState({isLoad: true});
        if(data){
            data.pageIndex = pageIndex;
            data.pageSize = pageSize;
        }
        fetch(config.url + url, {
            method: "POST",
            mode: "no-cors",
            headers:this.headers,
            body:data
        }).then((res)=>{
            that && that.setState({isLoad: false});
            if(res.status === '200'){
               
                successfuction && successfuction(res);
            }
            else{
                errorfunction && errorfunction(res);
            }
        }).catch((e)=>{
            //throw e;
            that && that.setState({isLoad: false});
        })
    },

    //  upload(url, data, success, fail, that) {
    //     that && that.setState({isLoad: true});
    //     let formData = new FormData();
    //     let file = {uri: data, type: 'multipart/form-data', name: data.match(/\.[\w\d]+$/)[0]};
    //     formData.append("file", file);
    //     fetch(config.url + url, {
    //         method: 'POST',
    //         headers: merged(this.headers, {
    //             'Content-Type': 'multipart/form-data',
    //         }),
    //         body: formData,
    //     }).then(()=>{
    //         that && that.setState({isLoad: false});
    //     })
    // }
}

export default commonService;


