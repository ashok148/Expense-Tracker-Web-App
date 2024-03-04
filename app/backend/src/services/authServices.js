const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/sendEmail");
const connectDatabase = require("../config/database");
connectDatabase();

//Register New User
export const registerUser = async (firstname, lastname, email, password, cpassword) => {
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    throw new Error({ error: "User already exists! Please login" });
  }
  if (password !== cpassword) {
    throw new Error({ error: "Password does'nt match!" });
  }
  const user = new User({
    firstname,
    lastname,
    email,
    password,
    cpassword,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err, "Fail to register.");
  }
  return ({ user, message: "User create successfully..." });
};

//Login user
export const loginUser = async (email, password) => {
  let existingUser;
  try {
    existingUser = await User.findOne( {email} );
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    throw new Error ({ "status":"fail", error: "Could not find any user for this account!" });
  }
  const isPasswordCorrect = await bcrypt.compareSync(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    throw new Error ({ error: "Incorrect email or password!" });
  }
  return ({ user: existingUser, message: "Login Successfull..." });
};

//Forgot password
export const forgotPassword = async(email) => {
  let existingUser;
  let info;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    throw new Error ({ error: "Could not find any user for this account!" });
    } 
    const secret = existingUser._id + process.env.JWT_SECRET_KEY;
    const resetToken = jwt.sign({ userID: existingUser._id }, secret, {
      expiresIn: "2h",
    });
  const passwordResetLink = `http://localhost:3000/password/reset/${existingUser._id}/${resetToken}`;
    console.log(passwordResetLink);
    //send Email to user
    try{
        info = await transporter.sendMail({
          from: process.env.EMAIL_EROM,
          to: existingUser.email,
          subject: `ExpenseTracker - Password Reset Link`,
          html: `<p>We have received your request to reset the password </p> <p>Use the link below to update your password:</p> <a href='${passwordResetLink}'> <button style="background:blue; color: white; font-size: 16px;">Click Here!</button></a>. <p>This link will expire in 24 hours.</p>
          <p>Thank You</p>
          <p>Customer Support</p>`
        });
    } catch (error){
      console.log(error);
      throw new Error ({ error: "Fail to send email!" });
    }
   return ({
      status: "success",
      message: `Email sent to ${existingUser.email} successfully...please check your email.`,
      info,
    });
};

//Reset Password

export const resetPassword = async (password, cpassword, id, token) => {
  const user = await User.findById(id);
  const new_secret = user._id + process.env.JWT_SECRET_KEY;
  try {
    jwt.verify(token, new_secret);
    if (password && cpassword) {
      if (password !== cpassword) {
        throw new Error({
            error: "New Password & Confirm New Password does'nt matched!",
          });
      } else {
        const newPassword = await bcrypt.hashSync(password);
        await User.findByIdAndUpdate(user._id, {
          $set: {
            password: newPassword,
          },
        });
        return ({ message: "Password reset successfully..." });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error ({ error: "Reset password token is invalid or has been expired!" });
  }
};

//Update profile 
export const updateProfile = async(firstname, lastname, password, cpassword, id) => {
  const user = await User.findById(id);
  try {
    if (password && cpassword) {
      if (password !== cpassword) {
        throw new Error ({
            error: "Old Password &  New Password does'nt matched!",
          });
      } else {
        const newPassword = await bcrypt.hashSync(password);
        const updatedData = await User.findByIdAndUpdate(user._id, {
            firstname,
            lastname,     
            password: newPassword,
        });
        return ({ message: "Details updated successfully...", data: updatedData });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error({ error: "Something went wrong please try again!" });
  }
};
