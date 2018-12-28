import React, {Component } from  'react';
import { message } from 'antd';
import store from './store';
import axios from 'axios';
import { getChangeValue, 
    getSubmit,
    getDeleteItem,
    getInitList,
    getInitListData
 } from './store/actionCreator';
import InputUi from './inputUi'
class adms extends Component {
    constructor(props) {
        super(props);
        //将this指向改变后，要记得重新赋值给方法
        this.changeValue = this.changeValue.bind(this); 
        this.submit = this.submit.bind(this);
        this.watchState = this.watchState.bind(this);
        //记得将store中的state赋值给本组件的state，而不是仅仅调用
        this.state = store.getState();
        //每一次redux变化都会自动执行
        store.subscribe(this.watchState);
    };
    componentDidMount() {
        // redux-thunk code
        const action = getInitListData();
        store.dispatch(action);
        axios.get('/list.json').then((res)=>{
            const action = getInitList(res.data);
            store.dispatch(action);
        })
        //redux-saga
        // const action = getInitList();
        // store.dispatch(action);
    };
    changeValue(e) {
        const value = e.target.value;
        const action = getChangeValue(value);
        store.dispatch(action)
    };
    submit() {
        if(!this.state.value) {
            message.error('input value first')
        }
        const action = getSubmit();
        store.dispatch(action)
    };
    deleteItem(index) {
        const action = getDeleteItem(index)
        store.dispatch(action);
    }
    watchState() {
        this.setState(store.getState());
    };
    render () {
        return (
           <InputUi 
           value={this.state.value}
           changeValue = {this.changeValue}
           submit = {this.submit}
           deleteItem = {this.deleteItem}
           list = {this.state.list}
           />
        )
    }
}
export default adms;