import React
// { Component }
 from 'react';
import { Input, List, Button } from 'antd';
import 'antd/dist/antd.css';
//当一个组件中只有render函数时候，可以将其改变为无状态组件，也就是一个方法抛出，这么做性能比较好，不需要执行类组件中的生命周期函数
//以下为改变为无状态组件的代码
const InputUi = (props)=>{
    return (
        <div>
            <h1>hello</h1>
            <Input placeholder="请输入。。。" style={{width:'300px'}} value={props.value} onChange={props.changeValue}/>
            <Button type="primary" onClick={props.submit}>提交</Button>
            <List
                bordered
                style={{width:'300px',marginTop:'10px'}}
                dataSource={props.list}
                renderItem={
                    (item,index) =>{
                        return (<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)
                    }
                }
            />
        </div>
    )
}
// 原来的类组件

//class InputUi extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>hello</h1>
//                 <Input placeholder="请输入。。。" style={{width:'300px'}} value={this.props.value} onChange={this.props.changeValue}/>
//                 <Button type="primary" onClick={this.props.submit}>提交</Button>
//                 <List
//                     size="small"
//                     bordered
//                     style={{width:'300px',marginTop:'10px'}}
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (<List.Item onClick={this.props.deleteItem.bind(this,index)}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default InputUi;
