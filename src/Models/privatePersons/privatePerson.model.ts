import mongoose, { Schema,Document } from 'mongoose';
import { Code } from 'mongodb';

export interface IprivatePersons extends Document {
    identification : String;
    name : String;
    surname : String;
    name_thai:String;
    surname_thai:String;
    address:String;
    date_issue:String;
    date_exprire:String;
    title:String;
    title_eng:String;
    gender:String;
    birthDate:String;
    image_picture:String;
    faceImage:String;
    code:String;
    plate:String;
    province:String;
    imageCar:[String];

}



const privatePersonsSchema : Schema = new Schema({
    identification :{
        type : String,
        unique:true,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    surname : {
        type : String,
        required : true
    },
    name_thai : {
        type : String,
    },
    surname_thai: {
        type : String,
    },
    address: {
        type : String,
    },
    date_issue: {
        type : String,
    },
    date_exprire: {
        type : String,
    },
    title:{
        type:String,
    },
    title_eng:{
        type:String,
    },
    birthDate:{
         type:String
    },
    image_picture:{
         type:String
    },
    faceImage:{
         type:String
    },
    code :{
         type:String,
         unique:true,

    },
    plate :{
        type:String,
        unique:true,
   },
   province :{
        type:String,
    },
    imageCar :{
        type:[String]
    }


});

export default mongoose.model<IprivatePersons>('privatePersons',privatePersonsSchema);

