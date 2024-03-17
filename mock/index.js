// let Mock = require('mockjs')
import Mock from 'mockjs'
export const note = Mock.mock({
    "data|19":[{
        "moment": new Date(),
        // id
        "id|+1":1,
        //userid
        "userId|+1":10,
        //内容
        "message|24-96":"@cword",
        // label
        "label|0-10":0,
        // name
        "name":"@cname",
        // like
        "like|0-120":0,
        // 评论
        "comment|0-19":0,
        "imgurl|0-4":0,
        // 是否撤销
        "revoke|0-20":0,
        // 是否举报
        "report|0-20":0,
        "type": 0
    }]
})

// 卡片
export const comment = Mock.mock({
    "data|19":[{
        "moment": new Date(),
        // id
        "id|+1":1,
        //userid
        "userId|+1":10,
        //内容
        "message|24-96":"@cword",
        // name
        "name":"@cname",
        "imgurl|0-13":0,
    }]
})

// 照片
export const photo = Mock.mock({
    "data|19":[{
        "moment": new Date(),
        // id
        "id|+1":1,
        //userid
        "userId|+1":10,
        //内容
        "message|24-96":"@cword",
        // label
        "label|0-10":0,
        // name
        "name":"@cname",
        // like
        "like|1-100":1,
        // 评论
        "comment|0-19":0,
        "imgurl|1-4":1,
        // 是否撤销
        "revoke|0-20":0,
        // 是否举报
        "report|0-20":0,
        "type": 0
    }]
})