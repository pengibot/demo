import React, {Component} from 'react';

class Application extends Component {

    constructor(props) {
        super(props);


    }

    UNSAFE_componentWillMount(props, state) {

    }

    componentDidMount(props, state) {
        console.log("Mounted with", props, state);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {

    }

    UNSAFE_componentWillUpdate(props, state) {
        if(this.props.name !== props.name) {
            // do something
        }


    }

    componentDidUpdate(props, state) {

    }

    render() {

        let name = "Nick";

        return (
            <div>
                <h1>Hello, {name}</h1>
                <span>This</span>
            </div>
        );
    }
}

export default Application