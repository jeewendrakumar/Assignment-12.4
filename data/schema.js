import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt} from "graphql";

import {
    globalIdField
} from "graphql-relay";

let helloCounter = 0;

const bookStoreType = new GraphQLObjectType({
    name: "BookStore",
    fields: () => ({
        id: globalIdField("BookStore"),
        hello: {
            type: GraphQLString,
            resolve: () => {
                helloCounter++;
                return `${helloCounter}: Hello World`;
            }
        },
        counter: {
            type: GraphQLInt,
            resolve: () => helloCounter
        }
    })
});
class BookStore {}
let bookStore = new BookStore();

const userCollectionType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: globalIdField("User"),
        firstName: {
            type: GraphQLString,
            resolve: () => {
                return "John";
            }
        },
        lastName: {
            type: GraphQLString,
            resolve: () => {
                return "Doe";
            }
        },
        age: {
            type: GraphQLInt,
            resolve: () => {
                return 35;
            }
        },
        lastLoginTimeStamp: {
            type: GraphQLString,
            resolve: () => {
                return new Date();
            }
        }
    })
});
class User {}
let user = new User();



const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        bookStore: {
            type: bookStoreType,
            resolve: () => (bookStore)
        },
        user: {
            type: userCollectionType,
            resolve: () => (user)
        }
    })
});

export default new GraphQLSchema({query});