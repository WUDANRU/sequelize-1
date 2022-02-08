const DB = require('sequelize');
const connect = new DB('orm', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

connect.authenticate().then(() => {
        console.log('success')
    })
    .catch(err => {
        console.error('error')
    })

const User = connect.define('User', {
    firstName: DB.STRING,
    lastName: {
        type: DB.STRING
    }
}, {
    timestamps: true
})

connect.sync({
    force: true
}).then(() => (User.create({
    firstName: 'Chen',
    lastName: 'MingMing'
}))).then(() => {
    return User.findAll({
        where: {
            firstName: 'Chen'
        }
    })
}).then(console.log)