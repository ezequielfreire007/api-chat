const chalk = require('chalk') // proporciona un color al console log

exports.success = function (req, res, message, status){
    res.status(status || 200).send({ 
        'error': '', 
        'body': message
    })
}

exports.error = function (req, res, message, status, detail){
    console.error(chalk.red( `[response error] ${detail}` ))
    res.status(status || 500).send({ 
        'error': message, 
        'body': ''
    })
}