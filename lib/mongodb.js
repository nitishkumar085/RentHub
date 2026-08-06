import mongoose from "mongoose";

const dataBaseConnection  = async ()=>{
    try{
            const connectionLink = process.env.DB_CONNECTION.replace('<password>',process.env.PASSWORD)
            await mongoose.connect(connectionLink)
            console.log('connected to db')
    }
    catch(err)
    {
        console.log(err)
    }
}

export default dataBaseConnection