/**
 *  Created by zhangshumeng on 2018/5/8
 */

import React, {Component} from 'react'

import {POST} from  './BaseRequest'

export {
    requestLiveDetail
}

// 直播详情
let requestLiveDetail = function(accessToken = '', id = '', user_id = '') {

    let options = {
        accessToken,
        id,
        user_id,
        version:'4.0.5',
        deviceType:'3',
        requestCode:'80005',
    }

    return new Promise(function (successComplete, fileComplete) {
        POST(options)
            .then((success) => {
                successComplete(success)
            })
            .catch((file) => {
                fileComplete(file)
            })
    })
}
