export const resolvers = {
  Query: {
    hello() {
      return "Hello";
    },

    greet(root, args) {
      return "Hello" + args.name;
    }

  }
};
//# sourceMappingURL=resolvers.js.map