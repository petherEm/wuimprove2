import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [false, 'Email already exists'],
        required: [false, 'Email is required'],
    },
    mobile: {
        type: String,
        unique: [true, 'Mobile already exists'],
        required: [false, 'Mobile is required'],
    },
    firstName: {
        type: String,
        unique: [false, ''],
        
    },
    lastName: {
        type: String,
        required: [false, ''],
        
    },
    userIban: {
        type: String,
        required: [false, 'IBAN is required'],
        
    }
    

});

const User = models.User || model("User", UserSchema)

export default User;
