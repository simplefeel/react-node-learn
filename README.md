# React-Node

## 概览
这是一个脚手架工具，前端使用react渲染，后端由node.js提供服务，主要有以下特点：

* 前端react+react-router+webpack
* 后端由node.js+express提供服务
* 开发环境和生产环境分离，不同配置，有效降低包的大小，提高访问性能
* 前端开发热加载，实时更新页面
* 通过nodemon，后端服务实时更新

## 项目目标
快速搭建node+react项目，不管是个人练习react项目或者是练习node.js，都能快速搭建开发环境

## 使用
1.下载或者clone本项目

2.安装依赖:
```
$ npm install
```

3.启动服务:
```
$ npm run dev
```

开启后，打开localhost:9000即可调试react项目

或者

启动项目:
```
$ npm run start
```
开启后，打开localhost:9000, 登录，体验node.js是如何处理前端ajax请求的

## 相关学习链接
[一起学node.js]https://github.com/nswbmw/N-blog</br>
[node.js包教不包会]https://github.com/alsotang/node-lessons

## 结语
不管是react,或者是node.js都需要自己亲自去编写代码，才能充分学会理解这些技术，本人接触node.js也不久，跟着撸过一些代码之后，才尝试搭建了这样一个前端react,后端node的项目，本人之前看到的大多是node+express+ejs等的项目，使用node+express+react来渲染的现成项目较少，因而才搭建了这样一个脚手架开发工具，有不足之处还望理解见谅，可以相互讨论，一起进步！
