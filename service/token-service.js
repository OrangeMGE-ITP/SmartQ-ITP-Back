const jwt = require('jsonwebtoken');
const config = require('config');
const tokenModel = require('../models/Token');

function generateTokens(payload) {
    const accessToken = jwt.sign(payload, config.get('JWT_ACCESS_SECRET'), {expiresIn: '1d'})
    const refreshToken = jwt.sign(payload, config.get('JWT_REFRESH_SECRET'), {expiresIn: '30d'})

    return { accessToken, refreshToken };
}

async function saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId })
    if(tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
}

module.exports = { generateTokens, saveToken };