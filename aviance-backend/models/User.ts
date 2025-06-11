import mongoose, {Document, mongo, Schema} from "mongoose";

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    role:'buyer'|'seller';
}

const userSchema=new Schema<IUser>(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        role:{type:String, enum:['buyer','seller'],default:"buyer"}
    },
    {
        timestamps:true
    }

);

const User=mongoose.model<IUser>('User',userSchema);

export default User;

    