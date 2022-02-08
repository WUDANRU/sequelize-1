const DB = require('sequelize');
const connect = new DB('orm2', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

const Player = connect.define('player', {}); //组
const Team = connect.define('team', {}) //队

// sequelize关系型数据库，组和队互相关联
Player.belongsTo(Team) //这个是吧Teamid插到player表里 //node index.js后创建了Player和Team两个表，Player的Teamid指向Team
Team.hasOne(Player)
    // Player.hasOne(Team) //这个是吧playerid插到Team表里


console.log(Player.prototype) //多出getTeam,setTeam,createTeam3个方法
console.log(Team.prototype, '123') //多出getPlayer等3个方法

connect.sync({
    force: true
})