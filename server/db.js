const mysql = require("mysql");
const config = require("./config/default");
// const { db } = require("./config/default");

const db = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
});

// 链接指定数据库
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
});

let bdbs = (sql, values) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release() // 释放该链接，把该链接放回池里供其他人使用
                })
            }
        })
    })
}

let wall = 'create database if not exists wall default charset utf8 collate utf8_general_ci;'

let createDatabase = (db) => {
    return bdbs(db, [])
}

// 创建数据表
// 留言/照片
let walls = `create table if not exists walls(
    id INT NOT NULL AUTO_INCREMENT,
    type INT NOT NULL COMMENT '类型0信息1照片',
    message VARCHAR(1000) COMMENT '留言',
    name VARCHAR(100) NOT NULL COMMENT '用户名',
    userId VARCHAR(100) NOT NULL COMMENT '创建者ID',
    moment VARCHAR(100) NOT NULL COMMENT '时间',
    label INT NOT NULL COMMENT '标签',
    color INT COMMENT '颜色',
    imgurl VARCHAR(100) COMMENT '图片路径',
    PRIMARY KEY ( id )
);`

// 留言反馈
let feedbacks = `create table if not exists feedbacks(
    id INT NOT NULL AUTO_INCREMENT,
    wallId INT NOT NULL COMMENT '墙留言ID',
    userId VARCHAR(100) NOT NULL COMMENT '反馈者ID',
    type INT NOT NULL COMMENT '反馈类型0喜欢1举报2撤销',
    moment VARCHAR(100) NOT NULL COMMENT '时间',
    PRIMARY KEY ( id )
);`

// 留言反馈
let comments = `create table if not exists comments(
    id INT NOT NULL AUTO_INCREMENT,
    wallId INT NOT NULL COMMENT '墙留言ID',
    userId VARCHAR(100) NOT NULL COMMENT '评论者ID',
    imgurl VARCHAR(100) COMMENT '头像路径',
    comment VARCHAR(100) COMMENT '评论内容',
    name VARCHAR(100) NOT NULL COMMENT '用户名',
    moment VARCHAR(100) NOT NULL COMMENT '时间',
    PRIMARY KEY ( id )
);`

let createTable = (sql) => {
    return query(sql, [])
}

// 先创建数据库再创建表
async function create() {
    await createDatabase(wall)
    createTable(walls)
    createTable(feedbacks)
    createTable(comments)
}

create()
// module.exports = mysql.createConnection(db);

