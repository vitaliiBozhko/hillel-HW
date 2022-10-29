const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

class Table extends React.Component {
    render(){
        return <div>table</div>
    }
}


root.render(
    <Table/>
);