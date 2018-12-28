import { initListType, changeValueType, submitType, deleteItemType } from './actionType.js';
const defaultState = {
    value: '',
    list: []
}
//将初始值传入方法中，否则会报错
export default (state = defaultState, action)=>{
    if(action.type === changeValueType) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.value = action.value;
        return newState;
    }
    if(action.type === submitType) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.value);
        newState.value = '';
        return newState;
    }
    if( action.type === deleteItemType) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === initListType) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    //未曾触发action时候要记得将默认值 return出去，否则会报错
    return state;
}