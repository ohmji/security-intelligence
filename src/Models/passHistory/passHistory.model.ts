import mongoose, { Schema,Document } from 'mongoose';

export interface IpassHistory extends Document {
    created:Date,
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
    note:[String];
    faceImage:String;
    code:String;
    plate:String;
    province:String;
    imageCar:[String];
    temperature:String;
    type:Boolean;
    role:Number;
    status:Boolean;
    signOutTime:Date

}
export interface OpassHistory extends Document {
    signOutTime:Date
    status:Boolean
}


const passHistorySchema : Schema = new Schema({
    created: { type: Date, default: Date.now 
    },
        identification :{
            type : String,
            default:""
            
        },
        name : {
            type : String,
            default:"",
        },
     surname : {
        type : String,
        default:"",
        },
        name_thai : {
            type : String,
            default:""
        },
        surname_thai: {
            type : String,
            default:"",
        },
        address: {
            type : String,
            default:"",
        },
        date_issue: {
            type : String,
            default:"",
        },
        date_exprire: {
            type : String,
            default:"",
        },
        title:{
            type:String,
            default:"",
        },
        title_eng:{
            type:String,
            default:"",
        },
        birthDate:{
            type:String,
            default:"",
        },
        image_picture:{
            type:String,
            default:"",
        },
        note:{
            type:[String],
            default:[],
        },
        temperature :{
            type:String,
            default:"",
        },
        faceImage:{
            type:String,
            default:""
        },
        code :{
            type:String,
            default:""
        },
        plate :{
            type:String,
            default:""
        },
        province :{
            type:String,
            default:""
        },
        imageCar :{
            type:[String],
            default:[]
        },
        type : {
            type:Boolean
        },
        role : {
            type:Number 
        },
        signOutTime:{
            type:Date,
            default:null
        },
        status:{
             type :Boolean,
             default:false,
             required:true
        }
        


});

export default mongoose.model<IpassHistory>('passHistory',passHistorySchema);

