import mongoose from "mongoose"

const connectDB = async() => {
  //
  try{
    await mongoose.connect("mongodb+srv://origin_db_user:J7Xq6u4Sv4ZJWo6h@cluster0.9hatglb.mongodb.net/?appName=Cluster0")
    console.log("Success: Connected to MongoDB")
  }catch{
    //  
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()        
  }
}

export default connectDB