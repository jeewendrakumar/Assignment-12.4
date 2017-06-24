import React from "react";
import Relay from "react-relay";

class User extends React.Component {
    render() {
        const {firstName} = this.props.user;
        return (
            <div>
                {firstName}
            </div>
        );
    }
}


export default Relay.createContainer(User, {
    fragments: {
        user: () => Relay.QL `
        fragment on User {
            firstName
        }
        `
    }
});
