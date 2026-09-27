import Users from "@/models/usermodel"
import jwt from "jsonwebtoken";
export const createUser = async (req)=>{
          const data = await Users.create(req)
return {data:data}
   
}

export const loginUser = async (req)=>{
    const{email,password} = req
    console.log(req)
   const user = await Users.findOne({email})
   if (!user) { // its check if user is not present
    throw new Error("Invalid email or password");
  }
  const isMatch = await user.comparePassword(password);  // compare the password 
   if (!isMatch) { // if password is not matched because !will became true when it get false and vsie vers
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
    return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  };

}