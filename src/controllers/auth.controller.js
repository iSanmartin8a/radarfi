import User from '../models/User'

export const signUp = async (req, res) => {
    const {username, email, password, roles} = req.body;

    console.log(req.body)
    
    res.json('signup')
}

export const signIn = async (req, res) => {
    res.json('signin')
}