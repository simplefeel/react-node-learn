# React-Node

## 概览

这是一个脚手架项目，前端使用 react 渲染，后端由 node.js 提供服务，主要有以下特点：

* 前端 react+react-router+webpack
* 后端由 node.js+express 提供服务
* 开发环境和生产环境分离，不同配置，有效降低包的大小，提高访问性能
* 前端开发热加载，实时更新页面
* 通过 nodemon，后端服务实时更新

## 项目目标

1.快速搭建 node+react 项目，不管是个人练习 react 项目或者是练习 node.js，都能快速搭建开发环境<br/> 2.学会初步使用 node.js 作为中间层，从而实现真正意义上的前后端分离。

## 使用

1.下载或者 clone 本项目

2.安装依赖:

```
$ npm install
```

3.启动服务:

```
$ npm run dev
```

开启后，打开 localhost:9000 即可调试 react 项目

或者

启动项目:

```
$ npm run start
```

开启后，打开 localhost:9000,调整 node 服务

> 源码都有使用注释，欢迎讨论学习

## Demo

[node 爬虫实例，前端 react 渲染](https://github.com/simplefeel/react-node-news)

## node.js 系列教程

以下系列转载自：众城翻译、segmentfault<br/>
原文：risingstack 出品的 [Node-Hero 系列](https://blog.risingstack.com/node-js-tutorial-russian-translation/)

1 [开始使用 node.js](http://www.zcfy.cc/article/node-hero-getting-started-with-node-js-tutorial-risingstack-1748.html)</br> 2 [使用 NPM](http://www.zcfy.cc/article/node-hero-using-npm-tutorial-risingstack-1749.html?t=newl)</br> 3 [理解异步编程](http://www.zcfy.cc/article/node-hero-understanding-async-programming-in-node-js-1759.html)</br> 4 [第一个 Node.js HTTP 服务器](http://www.zcfy.cc/article/node-hero-your-first-node-js-http-server-risingstack-1750.html)</br> 5 [Node.js 数据库教程](http://www.zcfy.cc/article/node-hero-node-js-database-tutorial-risingstack-1751.html)</br> 6 [Node.js Request 模块](https://segmentfault.com/a/1190000010964387)</br> 7 [Node.js 项目结构](http://www.zcfy.cc/article/node-hero-node-js-project-structure-tutorial-risingstack-1756.html?t=new)</br> 8 [使用 Passport.js 进行 Node.js 身份验证](https://segmentfault.com/a/1190000010964445)</br> 9 [Node.js 单元测试](https://segmentfault.com/a/1190000010964487)</br>

以下 4 篇文章，网络未找到译文，原文同样出自 risingstack：<br/>

10 [调试 node.js 应用](https://blog.risingstack.com/node-hero-node-js-debugging-tutorial/)</br> 11 [node.js 安全策略](https://blog.risingstack.com/node-hero-node-js-security-tutorial/)</br> 12 [如何部署 node.js 应用](https://blog.risingstack.com/node-hero-deploy-node-js-heroku-docker/)  
13 [如何监控 node.js 应用](https://blog.risingstack.com/node-hero-monitoring-node-js-applications/)</br>

## 相关学习链接

* [一起学 node.js](https://github.com/nswbmw/N-blog)</br>
* [node.js 包教不包会](https://github.com/alsotang/node-lessons)<br/>
* [前后端分离的思考与实践](http://taobaofed.org/blog/2014/04/05/practice-of-separation-of-front-end-from-back-end/)

## 结语

不管是 react,或者是 node.js 都需要自己亲自去编写代码，才能充分学会理解这些技术，本人接触 node.js 也不久，跟着撸过一些代码之后，才尝试搭建了这样一个前端 react，后端 node 的项目，本人之前看到的大多是 node+express+ejs 等的项目，使用 node+express+react 来渲染的现成项目较少，因而才搭建了这样一个脚手架开发工具，有不足之处还望理解见谅，可以相互讨论，一起进步！
