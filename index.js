const SQ = require('sequelize')

const connect = new SQ('orm3', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

const User = connect.define('user', {
    title: SQ.STRING
})

const Add = connect.define('add', {
    firstname: SQ.STRING
})

const Happy = connect.define('happy', {
    lastname: SQ.STRING
})

User.Add = User.belongsTo(Add)
Add.Happy = Add.hasMany(Happy)

connect.sync({ force: true }).then(() => {
    return User.create({
        title: 'hello world user',
        add: {
            firstname: 'hello world add',
            happies: [{
                lastname: 'hello world happy'
            }, {
                lastname: 'hello world happy2'
            }]
        }
    }, {
        include: [{
            association: User.Add,
            include: [Add.Happy]
        }]
    })
})