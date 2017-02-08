import React from 'react';

class CommonNotice extends React.Component {
    render() {
        return (
            <div className = "content-block">
                <dl className = "comm-dl">
                    <dt>
                        Notice
                        <a id = "noticeToggleBtn">
                            <i className="fa fa-caret-down"></i>
                        </a>
                    </dt>
                    <dd>
                        <i className = "fa fa-circle"></i>&nbsp;
                        访问本 Blog ，为避免部分样式失效，请使用内核支持 CSS3 的浏览器， IE 浏览器请使用 IE9+ 版本。
                    </dd>
                    <dd>
                        <i className = "fa fa-circle"></i>&nbsp;
                        本网站仅供交流阅读使用，转载请注明出处，谢谢。
                    </dd>
                    <dd>
                        <i className = "fa fa-warning text-danger"></i>
                        关于博文中的代码显示不正常，因为使用了xmp标签,可能在IE下会显示不正常，关于解决方案，作者会尽快想一个好的解决办法的。
                    </dd>
                </dl>
            </div>
        );
    };
};

export default CommonNotice;