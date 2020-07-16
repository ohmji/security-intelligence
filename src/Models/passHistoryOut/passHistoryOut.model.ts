import mongoose, { Schema,Document } from 'mongoose';



export interface IpassHistoryOut extends Document {
    created:Date,
    passHistoryId : String;
    status : Boolean;
    signInTime:Date
   

}


const passHistoryOutSchema : Schema = new Schema({
    created: { type: Date, default: Date.now 
    },
    passHistoryId :{
        type : String,
        required : true,
        // unique:true
    },
    status:{ 
        type:Boolean,
        required : true,
    },
    signInTime:{ 
        type:Date,
        required : true,
    },
});

export default mongoose.model<IpassHistoryOut>('passHistoryOut',passHistoryOutSchema);

