/**
 * Created by Administrator on 2015/4/15.
 * 功课管理
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var ContentTags = require('./ContentTags');
var User = require('./User');
var CourseSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    authorId : {
        type : String
        // ref : 'User'
    },  // 学员ID
    authorName : {
        type : String
        // ref : 'User'
    },// 学员姓名
    courses:[{
        contentTagsId : {
            type : String
            // ref : 'ContentTags'
        },  //功课id
        contentTagsTitle  : {
            type : String
            // ref : 'ContentTags'
        },  //功课标题
        todayNum : {type : Number , default : 0}, //当日数量
        totalNum : {type : Number , default : 0} //总数量
    }],    
    date: { type: Date, default: Date.now }, //功课时间
    contents: { type : String , default : "输入回向文..."}// 回向文
});

var Course = mongoose.model("Course",CourseSchema);

module.exports = Course;

