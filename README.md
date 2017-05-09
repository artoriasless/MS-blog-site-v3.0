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

2017-02-10　完善新增文章页面，剩余：①文章的html源码显示；②添加链接的kit；③添加文章至数据库的接口

2017-02-12　完成在线添加文章功能，本项目暂时告一段落。剩余的**添加留言**、**代码显示bug**，这个放到后续有时间了再去折腾吧。然后，抽时间，会租个服务器（穷的只能租一个月吧），放到线上试一下。另外要开始忙公司的事情了，然后也要抽空把这些东西做个笔记，汇总一下踩过的坑了。

2017-02-15　获取显示数据存在bug，update组件陷入死循环了，后续找时间再来看看怎么解决

2017-03-25　重新写了一下，用react-redux-router，数据用一个统一的state进行控制，暂时还未将异步获取数据的ajax加上，用的静态写死的，后续有时间了继续完善，运气好的话（业余时间充足），应该能在下月上线吧。

2017-03-27　做了一点小改动，后台路由规则稍微调整，前端路由规则稍微调整，目录筛选页面（原先是和总目录列表在同一个page中）另开一个page，现阶段还差ajax获取数据待完善。

2017-03-27　用上了thunk，把ajax部分的内容加上了，现在可以从数据库获取数据了（异步ajax，前提是在本地有对应的mysql数据库，相关配置在models中的sqlOption进行修改），基本这个东西告一段落，抽空租个服务器，把东西放上去。差点忘了，还有个添加文章的功能还没加上，暂时先不管了，以后有空了再说。

2017-04-12　修复了一些bug（看某篇文章的时候刷新后没内容了），调整了一下具体文章的路由规则，新增文章部分修改了一下，不过功能没完成，post到后台的时候报错了，等有空了再调整。

2017-04-12　新增文章功能完善，修复bug，项目到此告一段落，等后续租服务器后放上去后把链接放上来。

2017-04-19　增加了【添加留言】的功能，另外关于放到线上，这个站点好像可以完全当一个博客站点了，后续考虑一直续费租服务器，然后把一些东西放到上面。

2017-04-20　www.monkingstand.cn 线上放上去了，总算是功能齐全了。告一段落吧

2017-05-03　鉴于虽然所有东西都用redux写了一遍，但是鉴于有些地方没弄好，而且这个站点已经考虑作为永久站点使用，所以，考虑重构一下，希望能写的更加好一点吧（强迫症的尴尬），另外为了熟练使用git，暂时练一下git的命令行，采用分支这种东西（用了那么久的github，竟然分支这种东西基本没用上）

2017-05-05　把之前碰到的bug修复了一下。详细信息如下：

【报错（警告）信息】index.js:24935 Warning: [react-router] You cannot change <Router routes>; it will be ignored

【参考】A good first step would be to look again into the error message. It’s not a random error; it actually tells what happened. It says that  Router component cannot accept new value of routes prop. This means you are recreating new routes every time you render the root component, rather than create them once for the lifetime of your app, which is the scenario React Router intends to support. The conclusion is you would need to look into where you render the Router component, and make sure you don't create routes on every render.

【解决方法（参考）】

Only thing you need to do, it's to throw <Route /> out of render() method.


So, there are many ways to solve this issue.

Most Official way is what @Stormy say.

My solution like this:

const routes = (

  <Route path="/" component={App}>

    <Route path="about" component={About} />

    <Route path="inbox" component={Inbox} />

  </Route>

)

// Don't let <Route> in render() method

class Routers extends React.Component {

  render() {

     return ( 

        <Router>

          { routes }

        </Router>

      );

    }
    
}

2017-05-09　部分内容重构了一下，修复了一下刷新【directoryFilter】页面后没有目录项的bug，添加了客户端访问ip黑名单功能（比较简单···比较low）