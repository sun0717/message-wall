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