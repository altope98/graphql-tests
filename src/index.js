import express from 'express';
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";

import {connect} from "./database";


const app= express();
connect();

app.get("/", ((req, res) => {
    res.json({
        message:"AAAAA"
    })
}))


app.get('/graphql', graphqlHTTP({
    graphiql: false,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))
app.post('/graphql', graphqlHTTP({
    graphiql: false,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

app.listen(5000, ()=> console.log("Server running 5000"));