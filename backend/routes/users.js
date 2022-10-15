import express from 'express';
import mongoose, {mongo} from 'mongoose';

const router = express.Router();


let users = [];
const userSchema = new mongoose.Schema({
    name: String,
    password: String
},{collection:'users'});
const mongoUser = mongoose.model('users', userSchema);


router.get('/', async (req, res) => {
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@scd-lab.wber9yh.mongodb.net/Scd-Lab?retryWrites=true&w=majority");
    users=await mongoUser.find({});
    res.send(users)
})

router.post('/', async (req, res) => {
    const user = req.body;
    await mongoose.connect("mongodb+srv://abdulmannan:03105784747@scd-lab.wber9yh.mongodb.net/Scd-Lab?retryWrites=true&w=majority");

    const newUser = new mongoUser({ name: user.values.name,password:user.values.password});
    newUser.save((error)=>{
        if (error) return (error);
        else console.log(newUser);
    });
    console.log(JSON.stringify(user.values));
    users.push(user.values);

    res.send(users)
})

export default router;

