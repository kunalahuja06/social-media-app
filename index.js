const {ApolloServer,pubSub}=require("apollo-server")
const mongoose=require('mongoose')

const typeDefs=require('./graphql/typeDefs')
const resolvers=require('./graphql/resolvers')
const {MONGODB}=require('./config.js')


//  const pubsub = new PubSub();

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
})

mongoose.connect(MONGODB,{useNewUrlParser:true})
.then(()=>{
    console.log("connected to Mongo DB")
    return server.listen({port:3000});
}).then((res)=>{
     console.log(`server running at ${res.url}`);
})
