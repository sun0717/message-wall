vite导入全局样式变量(less)
```js
css: {
    preprocessorOptions: {
        less: {
            additionalData: '@import "@/styles/common.less";', // 引入多个文件以；分割
        }
    }
}
```
typed.js需要做跨域，不然报504

首部显示隐藏采用emits

照片墙：右边控制照片，先做毛玻璃效果

