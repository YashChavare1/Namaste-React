import React from "react";
import UserContext from "../utils/UserContext";

class AboutDetailsClass extends React.Component {
    constructor(props) {
        super(props);

        // accessing state variables
        this.state = {
            name: this.props.name,
            age: this.props.age,
        };
    }

    // componentDidMount() {

    // }

    // componentWillUnmount() {

    // }

    render() {
        const { name, age } = this.state

        return (
            <>
                <h1>loggedInUser:
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <span> { loggedInUser }</span>
                        )}
                    </UserContext.Consumer>
                </h1>
                <h1>{age}</h1>
                <button
                    onClick={() => {
                        this.setState(prevState => ({
                            age: prevState.age + 1,
                        }))
                        console.log(this.state);
                    }}
                >Increase Age</button>
            </>
        );
    };
};

export default AboutDetailsClass;

/**
 *  - Sequence of executing the functions
 *  - AboutDetailsClass class will be instantiated.
 *  - The constructor will execute first.
 *  - The render function will be executed.
 *  - After the component is rendered in the DOM, componentDidMount will be executed.
 *  - If there are state updates triggered by useState or any other means during componentDidMount, then the component will re-render, and after that  componentDidUpdate will be executed.
 *  - When the component is unmounted from the DOM, componentWillUnmount will be called.
 */