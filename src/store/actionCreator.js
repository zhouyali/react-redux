import {changeValueType,submitType,deleteItemType,initListType} from './actionType'
// redux-thunk code
import axios from 'axios';
const getChangeValue = (value)=> {
    return {
        type:changeValueType,
        value,
    }
}

const getSubmit = () => {
    return {
        type: submitType,
    }
}

const getDeleteItem = (index)=> ({
    type: deleteItemType,
    index,
})

const getInitList = (data)=>({
    type: initListType,
    data
})
// redux-thunk code
const getInitListData = ()=>{
    //返回函数，默认会带dispatch参数
    return (dispatch)=>{
        axios.post('/list.json').then((res)=>{
            const data = res.data;
            const action = getInitList(data);
            console.log(dispatch);
            dispatch(action);
        })
    }
}

export {
    getChangeValue, 
    getSubmit,
    getDeleteItem,
    getInitList,
    getInitListData
}