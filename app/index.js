import React, { Component } from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends Component {
	render() {
		return (
            <h1>Meanwise Corporate Application</h1>
        );
	}
}

ReactDom.render(<HelloWorld />, document.getElementById('app'));