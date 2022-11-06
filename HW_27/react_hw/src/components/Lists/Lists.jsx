import React, {Component} from 'react';
import List from '../List/List';
import './style.scss'

class Lists extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    }

    transferFromFirstToSecond() {
        this.setState({
            secondList: [this.state.firstList.shift(), ...this.state.secondList]
        })
    }

    transferFromSecondToFirst() {
        this.setState({
            firstList: [this.state.secondList.shift(), ...this.state.firstList]
        })
    }

    transferFromSecondToThird() {
        this.setState({
            thirdList: [this.state.secondList.shift(), ...this.state.thirdList]
        })
    }
    removeLastLi() {
        this.setState({
            thirdList: this.state.thirdList.slice(0, -1)
        })
    }

    render() {
        let {list} = this.props;

        return (
            <div className={'lists'}>
                <List
                    list={list}
                    actions={[
                        {btn: 'Transfer to second', action: this.transferFromFirstToSecond.bind(this)}
                    ]}
                />
                <List
                    list={this.state.secondList}
                    actions={[
                        {btn: 'Transfer to first', action: this.transferFromSecondToFirst.bind(this)},
                        {btn: 'Transfer to third', action: this.transferFromSecondToThird.bind(this) }
                    ]}
                />
                <List
                    list={this.state.thirdList}
                    actions={[
                        {btn: 'Remove last Li', action: this.removeLastLi.bind(this)}
                    ]}
                />
            </div>
        );
    }
}

export default Lists;