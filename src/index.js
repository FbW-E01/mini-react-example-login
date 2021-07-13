import ReactDOM from 'react-dom';

function Box() {
    return <p>Hello React!</p>;
}

ReactDOM.render(<Box />, document.querySelector("#react-root"))