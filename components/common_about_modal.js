const aboutModal = '' +
    '<div id="aboutModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel">' +
        '<div class="modal-dialog modal-lg">' +
            '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                        '<span aria-hidden="true">×</span>' +
                    '</button>' +
                    '<h4 class="modal-title" id="aboutModalLabel">About</h4>' +
                '</div>' +

                '<div class="modal-body">' +
                    '<dl class="comm-dl">' +
                        '<dt>About WebPage</dt>' +
                        '<dd>' +
                            '写在开头。<br/>' +
                            '这已经是这个破站点的第三个版本了，还是用nodejs（express）做的后台，然后用的react生成的页面（原本还想搭配redux一起使用的，不过好像和路由冲突了，暂时没想到好的解决方案，所以就没用上redux），关于数据，还是用的mysql，用了好几个插件，各种jquery的js的引入部分没处理好，总之能让他先跑起来再说吧。' +
                        '</dd>' +

                        '<dd>' +
                            '关于网站，除了感谢github、bootstrap、jquery、font-awesome和roundabout外，还得谢谢Jason Long，因为首页（index.html，就是整个博客刚进来那一页内容）就是在他分享的模板的基础上进行修改的。<br/>' +
                            '关于本网站的源码，我已经放在github上了，有兴趣的小伙伴可以通过“Contact Me!”里面的github链接，到我github主页下查看对应项目。<br/>' +
                            'PS：好像感谢了他们也看不到，不过还是得感谢一下。' +
                        '</dd>' +

                        '<dt>About Blog</dt>' +
                        '<dd>' +
                            '关于这个博客的内容，其实大多数内容都是自己的一些笔记和踩过坑。<br/>' +
                            'PS：其实这些个内容都是别人踩过的坑，百度都能搜得到，不过还是想把这些放上来，作为自己的一个学习的笔记。' +
                        '</dd>' +

                        '<dt>About Website</dt>' +
                        '<dd>' +
                            '关于这个网站的内容，除去首页用了Json Long的模板再做点了修改，内容显示页，全部采用原创手写，虽说挺费时间，不过至少达到了自己要的效果。<br/>' +
                            '内容展示页面采用和SPA类似的渲染方式，至于数据存储，因为没有用到数据库这一方面的东西（自己不会，也暂时不想费时去折腾），就采用了引入本地json来模拟ajax的情形。<br/>' +
                            'PS：这个网站暂时没做自适应（布局不太好调整），等PC端的完成了，之后会再新增一个专门针对wap的版本。<br/>' +
                            '外，对于代码高亮这块，是我个人做的一套方案，只有html、css及js的代码显示和行号，但是没做高亮，主要是还是觉得别人的解决方案有点蛋疼、复杂，虽说是用js自动转的，后续再考虑如何解决这块吧。' +
                        '</dd>' +
                    '</dl>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

export default aboutModal;