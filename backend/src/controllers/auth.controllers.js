import {User} from "../models/user.models.js";

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(404).send('Provide Username and password');
    }
    const user = await User.findOne({username: username})
    if (!user) {
        return res.status(401).json('Wrong credentials.');
    }
    if(user.password === password) {
        return res.status(200).json('Login successful');
    }else{
        return res.status(401).json('Wrong credentials.');
    }
}


export {login};