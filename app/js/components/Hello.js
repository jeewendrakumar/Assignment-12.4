import React from "react";
import Relay from "react-relay";

class Hello extends React.Component {
    render() {
        const {firstName, lastLoginTimeStamp} = this.props.user;
        return (
            <div>
                {lastLoginTimeStamp===null ?
                    (<span><b>Welcome {firstName}</b> and congratulation on your first login</span>)
                    : 
                    (<span><b>Welcome {firstName} </b> yours last login time {lastLoginTimeStamp}</span>)
                }  
            </div>
        );
    }
}


export default Relay.createContainer(Hello, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            hello
        }
        `,
        user: () => Relay.QL `
        fragment on User {
            firstName
            lastLoginTimeStamp,
            id
        }
        `
    }
});
