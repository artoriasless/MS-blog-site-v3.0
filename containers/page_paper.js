import React from 'react';
import { Link } from 'react-router';

class PagePaper extends React.Component {
    render() {
        console.info('---------------------');
        console.info(this.props);
        console.info('---------------------');
        return (
            <div>
                <Link to = "/index">
                    首页
                </Link>
                <br/>
                <Link to = "/directory">
                    目录页
                </Link>
                <br/>
                <Link to = "/paperId=1">
                    文章页
                </Link>
                <br/>
                <Link to = "/newPaper">
                    新增文章页
                </Link>
                <br/>
                <h1>当前是文章内容页</h1>
            </div>
        );
    };
};

export default PagePaper;