// import * as mongoose from 'mongoose';

//para di maimport lahat. kindly replaced every imported objects with mongoose.<object here> 
// kung di gumana. :))

import { model, Document, Schema} from 'mongoose';
import { IUser } from '../_interfaces/IUser';

const userSchema = new Schema({
    userId: {type: String, unique: true, required:true},
    password: {type:String, required: true},
    accType: {type:String, required: true}
});

const userModel = model<IUser & Document>('User', userSchema);

export default userModel;