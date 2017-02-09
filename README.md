# MS-blog-site-v3.0
a blog site by Stan_Lee using node.js as Server,react as FE,mysql as Database

##【关于此项目】 ##
本项目基于上两个版本，在原先两个版本上进行修改，可点击以下两个链接查看源码及说明。

【ver 1.0】 

访问地址： https://monkingstand.github.io/ 

源码及说明： https://github.com/MonkingStand/MonkingStand.github.io

【ver 2.0】 

访问地址： *网站上线没几天，被黑了，服务只租了一个月的，后续就不管了，暂时没有线上访问地址*

源码及说明： https://github.com/MonkingStand/MS-blog-site

【ver 3.0】

此项目做了进一步的改进，用nodejs作为后台服务器运行环境，数据库使用mysql，路由采用express模块框架进行搭建，关于数据获取，完全采用ajax异步获取的方式（和2.0版本区别不大，可以说基本一样），只是在前端部分，用的react动态js框架生成的html。

###补充说明###

因为3.0这个版本是在2.0的基础上改的，所以很多东西没设计好。
*****
**jquery和jquery-ui依旧在用，还是用的静态资源引入，完全浪费了nodejs；**
*****
**还有就是bootstrap和font-awesome这两个，因为里面要引用到字体文件，有一些字体文件的名称后面有关于版本的，可能是正则没写好，导致没法打包；**
*****
**关于css样式部分，因为index页面和home页面的样式部分重复冲突了，所以index页面部分用了行内样式，没有把这部分的css打包压缩进来。**
*****
还有一些其他的小问题，杂七杂八还有好多，因为是当做练手项目，暂时也没考虑太多，正常能运行就好。

另外最初考虑把redux也用上的，不过后来实际重构的时候才发现，好像用不上，所以源码里定义了actions和reducers，但是实际并没用上，后续更新在考虑要不要加上吧。

##【关于项目之后的一些笔记、填坑记录（主要是react部分）】##

这里仅做一个目录功能，详细的笔记、填坑记录后续会放到博客园或者这个线上站点里，后续更新。
*****
**webpack打包js的时候同时打包css、图片及字体文件（不知道说法正不正确）**
*****
**react路由**
*****
**react组件传值、相互影响**
*****
**redux（虽然没用到，不过原本打算用的，也有一点使用后的感受，放上来凑个数吧）**
*****

##【更新、修改记录】  ##
2017-01-25　项目构思重构。

2017-01-25 ~ 2017-02-01　过年期间，瘫在家里了，暂时搁置了。

2017-02-07　项目重构基本完成，剩余：①【在线添加留言】、【显示留言】暂未加进来；②【在线添加文章（仅限admin）】暂未加进来。
2017-02-09　修复部分bug：①在目录页面，通过“最近文章”跳转到具体一篇文章出错，②404页面显示bug；新增在线添加文章页面（静态）。
