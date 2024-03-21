const express = require("express");
const controller = require("../controller/dbserver")
const indexRouter = express.Router();

// 新建wall数据
indexRouter.post("/insertwall", (req, res) => {
    controller.insertWall(req, res)
});

// 新建反馈
indexRouter.post("/insertfeedback", (req, res) => {
    controller.insertFeedback(req, res)
});

// indexRouter.post("/deletefeedback", (req, res) => {
//     controller.deleteFeedback(req, res)
// });

// 新建评论
indexRouter.post('/insertcomment', (req, res) => {
    controller.insertComment(req, res)
});

// 删除墙
indexRouter.post("/deletewall", (req, res) => {
    controller.deletewall(req, res)
});

// 删除反馈
indexRouter.post('/deletefeedback', (req, res) => {
    controller.deleteFeedback(req, res)
})

// 删除评论
indexRouter.post('/deletecomment', (req, res) => {
    controller.deleteComment(req, res)
})

// 分页查询wall并获取赞、举报、撤销数据
indexRouter.post('/findwallpage', (req, res) => {
    controller.findWallPage(req, res)
})

// 倒叙分页查墙的评论
indexRouter.post('/findcommentpage', (req, res) => {
    controller.findCommentPage(req, res)
})

module.exports = indexRouter;