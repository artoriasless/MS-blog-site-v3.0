var common_dataDeepCopy = (originObj) => {
    /* 用于深拷贝的对象只是用来存储数据的，采用最简单直接的方法 */
    return JSON.parse(JSON.stringify(originObj));
};

export default common_dataDeepCopy;