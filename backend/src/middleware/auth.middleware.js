import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next)=> {
    const authCookie = req.cookies.token;
    console.log("Auth Cookie:", authCookie);
    if (!authCookie){
        return res.status(401).json({message:"token required"});
    }
    try {
        const decoded = jwt.verify(authCookie, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message:"ERR_UNAUTHORIZED"});
    }
};

// import jwt from "jsonwebtoken";
// import Auth from "../schema/auth.schema.js";

// const authMiddleware = async (req, res, next) => {
//   try {
//     const authCookie = req.cookies.token;

//     if (!authCookie) {
//       return res.status(401).json({
//         message: "token required",
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await Auth.findById(decoded.id);

//     if (!user) {
//       return res.status(401).json({
//         message: "User not found",
//       });
//     }

//     req.user = user;

//     next();
//   } catch (err) {
//     console.error("Auth error:", err.message);

//     return res.status(401).json({
//       message: "Invalid or expired token",
//     });
//   }
// };

// export default authMiddleware;
