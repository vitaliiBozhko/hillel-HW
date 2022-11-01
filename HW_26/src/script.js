const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

class Table extends React.Component {

    constructor(props) {
        super(props);

        const activeItems = setInterval(() => {
            let randomIndex = getRandom(0, this.state.listIndex.length);
            let randomItem = this.state.listIndex[randomIndex];

            if (this.state.listIndex.length === Math.floor(this.state.list.length / 2)) {
                this.setState({
                    borderWidth: `10px`
                })
            }

            if (!this.state.listIndex.length) {
                clearInterval(activeItems);
                this.setState({
                    borderWidth: `20px`
                })
            }

            this.setState({
                list: this.state.list.map((item,index) => {
                    if(index === randomItem) item.active = true;
                    return item;
                }),
                listIndex: this.state.listIndex.filter((item,index) => index != randomIndex)
            });
        }, 2000)
    }

    state = {
        list: this.props.list,
        listIndex: Object.keys(this.props.list),
        styleObject: {},
        borderWidth: 0
    }

    render(){
        return (
            <table style={{borderWidth: this.state.borderWidth}}>
                <tbody>
                    {this.state.list.map((item, index) => (
                        <tr style={item.active &&  {color: `green`, fontWeight: `bold`}} key={index}>
                            <td>{item.type}</td>
                            <td>{item.icon}</td>
                        </tr>))}
                </tbody>
            </table>
        )}
}

root.render(
    <Table list={animals}/>
);