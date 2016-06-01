/**
 * Created by Administrator on 2015/4/11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var UserSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:  String,
    userName : String,
    password:   String,
    email : String,
    qq : Number, //微信号
    phoneNum : Number,//手机号
    comments : { type: String, default: "请介绍一下自己的修行..." },
    position : String, //是否皈依
    company : String,  // 依止师父
    website : String, // 个人站点
    date: { type: Date, default: Date.now },
    logo: { type: String, default: "/upload/images/defaultlogo.png" },
    group: { type: String, default: "0" },
    gender : String,//是否出家
    province : String, // 微信号
    city : String, // 所在城市
    year : Number, // 学佛时间
    openid : String,   // 针对qq互联
    retrieve_time : {type: Number} // 用户发送激活请求的时间

});

var User = mongoose.model("User",UserSchema);

module.exports = User;
