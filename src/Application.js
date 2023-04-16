import React, {Component} from 'react';

class Application extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.count > 10 && this.state.count !== prevState.count && !this.state.overTen) {
            console.log("Updating over ten")
            this.setState({overTen: true});
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        let {count} = this.state;

        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                {(this.state.overTen ? <h3>Beat high score of 10!</h3> : null)}
                <span>
                    <button onClick={(e) => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application