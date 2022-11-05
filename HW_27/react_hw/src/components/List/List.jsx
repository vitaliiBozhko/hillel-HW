import React, {Component, Fragment} from 'react';
import './style.scss'

class List extends Component {
    render() {
        let {list, actions} = this.props;

        return Array.isArray(list) && list.length ? (
            <div className={'list'}>
                <ul>
                    {list.map((item, index) => <li key={index}>{item.title}</li>)}
                </ul>
                {actions.map((item, index) => <button key={index} onClick={item.action}>{item.btn}</button>)}
            </div>
        ) : null;
    }
}

export default List;