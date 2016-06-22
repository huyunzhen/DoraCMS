/**
 * Created by Administrator on 2015/4/15.
 * 功课管理
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var UserCourseSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    userId : {
        type : String
        // ref : 'User'
    },  // 学员ID
    userName : {
        type : String
        // ref : 'User'
    },// 学员姓名
    courses: {
        type : String
    },           
    date: { type: Date, default: Date.now }
});

var UserCourse = mongoose.model("USerCourse",UserCourseSchema);

module.exports = UserCourse;

