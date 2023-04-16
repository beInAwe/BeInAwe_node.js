const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址
    user: 'root',
    password: 'admin123',
    database: 'my_db_01' //操作哪个数据库
})



// //测试能否正常工作 仅供测试
// db.query('select 1',(err,results)=>{

//     if(err) return console.log(err.message);

//     console.log(results);
// })

// const sqlStr='select * from users'

// db.query(sqlStr,(err,results)=>{
//     //查询数据失败
//     if(err) return console.log(err.message);
//     //查询成功， select 查询语句 结果是数组
//     console.log(results);
// })


// 新增数据 username 值为spiderman  password 'pcc123'
const user = {username:'spiderman11111' ,password :'pcc123111'}

const sqlStr ='insert into users(username ,password) value(?,?)'

db.query(sqlStr,[user.username,user.password],(err,results)=>{
    if(err) return console.log(err.message);


    //判断是否插入成功
    if(results.affectedRows===1){
        console.log('插入成功');
    }
})

// //一一对应属性 数据表字段 bianjie 插入
// const user = { username: 'Spider-Man2', password: 'pcc4321' }
// const sqlStr = 'insert into users set ?'
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })

// // 更新用户的信息
// const user = { id: 4, username: 'aaa', password: '000' }
// //定义sql
// const sqlStr = 'update users set username=?,password =? where id =?'

// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('更新成功')
//     }
// })

// //演示更新数据的便捷方式
// const user = { id: 4, username: 'aaaa', password: '0000' }

// const sqlStr ='update users set ? where id=?'

// db.query(sqlStr,[user,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('更新成功了');
//     } 
// })

// // 根据id删数据   删除id=5的用户  仅有一个占位符数组可省略
// const sqlStr ='delete from users where id=?'
// db.query(sqlStr,5,(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('删除成功');
//     }
// })

// //标记删除  不要delete太危险
// const sqlStr ='update users set status=? where id=?'

// db.query(sqlStr,[1,4],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('标记删除成功');
//     }
// })












