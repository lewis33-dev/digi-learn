import mongoose from 'mongoose'
const {Schema} = mongoose

const Users = new Schema({
    name:String,
    photo:String,
    userId:String,
    isTeacher:{ type: Boolean, default:false},
    isRecruiter:{ type: Boolean, default:false},
})
const Courses = new Schema({
    name:String,
    thumbnail:String,
    category:String,
    description:String,
    ratings:Number,
    teacher:Schema.Types.ObjectId,  // references user who created course
    students:[
        {
            progress:Number,
            ratings:Number,
            project:String, //File
            user:Schema.Types.ObjectId
        }
    ]
})
const Classes = new Schema({
    name:String,
    thumbnail:String,
    position:Number,
    description:String,
    project:String, //file
    video:String,
    courseId:Schema.Types.ObjectId
})

const Jobs = new Schema({
    position:String,
    location:String,
    nature:String, // remote,onsite,hybrid
    jobDescription:String,
    companyDescription:String,
    link:String,
    recruiter:Schema.Types.ObjectId,
    applicants:[
        {
            user:Schema.Types.ObjectId
        }
    ]
})

const Messages = new Schema({
    author:Schema.Types.ObjectId,
    receipient:Schema.Types.ObjectId,
    classId:Schema.Types.ObjectId,
    body:String,
    attachment:String, //file
})

// Add assessments quizes

export {
    Users,
    Courses,
    Classes,
    Jobs,
    Messages,
}