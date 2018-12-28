import Mock from 'mockjs';
const list = function() {
    return {list:[1,2,3,4,5,6,7,8,9]};
}

Mock.mock(list,'get',list);
