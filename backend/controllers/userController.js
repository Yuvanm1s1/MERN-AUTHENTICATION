const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// Function to create a JWT token
const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: '3d' })
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)  // ✅ Store the returned token
        res.status(200).json({ email, token })
        return
    }catch(error){
        res.status(400).json({ error: error.message })
    }
    res.json({ message: 'Login user' })
}

// Signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)  // ✅ Store the returned token
        res.status(200).json({ email, token })  // ✅ Send token in response
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// ✅ Ensure both functions are correctly exported
module.exports = { loginUser, signupUser }
