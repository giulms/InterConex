import mongoose, { mongo } from "mongoose";

async function conectaBanco(){
    mongoose.connect("mongodb+srv://admin:15243@cluster0.asnuy.mongodb.net/InterDB?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default conectaBanco;