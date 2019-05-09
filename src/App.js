import React, { PureComponent } from 'react';
import update from 'immutability-helper';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            arr: [{ name: '张三', age: 20, edit: false }, { name: '李四', age: 22, edit: false }],
            arr2: [{ name: '张三', age: 20, edit: false }, { name: '李四', age: 22, edit: false }]
        }
    }

    onChangeHandle(index, e) {
        let newArr = [...this.state.arr];
        newArr[index]['name'] = e.target.value;
        this.setState({ arr: newArr })
    }

    onCanel(index) {
        this.setState({ arr: this.state.arr2 })
    }

    onEdit(index) {
        this.setState({
            arr: this.state.arr2
        }, () => {
            this.setState({
                arr2: this.state.arr
            })
            let newArr = update(this.state.arr, { [index]: { edit: { $set: true } } });
            newArr.forEach((item) => {
                item.edit = false;
            })
            newArr[index]['edit'] = true;
            this.setState({ arr: newArr })
        })
    }

    render() {
        const { arr } = this.state;
        return arr.map((item, index) => {
            if (item.edit) {
                return (
                    <div key={item.age}>
                        <input value={item.name} onChange={(e) => this.onChangeHandle(index, e)} />
                        <button onClick={() => this.onCanel(index)}>取消</button>
                    </div>
                )
            }
            return (
                <div key={item.age} >
                    <div style={{ display: 'inline-block', width: 175 }}>{item.name}</div>
                    <button onClick={() => this.onEdit(index)}>编辑</button>
                </div>
            )
        })
    }
}

export default App;