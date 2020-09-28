import express from 'express';
import { graphqlHTTP } from "express-graphql";
import schema from 'schema';
const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "AAAAA"
  });
});
app.get('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}));
app.listen(5000, () => console.log("Server running 5000"));
//# sourceMappingURL=index.js.map