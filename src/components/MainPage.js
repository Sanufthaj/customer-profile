import React, { createContext, useContext, useState } from "react";
import Customer from "./Customer";
import { UserContext } from "../App";
import { Formik, useFormik } from "formik";

export const mainPageContext = createContext();

function MainPage() {
  const emailInputRef = React.useRef(null);

  const { auth, setAuth } = useContext(UserContext); //useContext from App.js
  // const [currentForm, setCurrentForm] = useState({
  //   email: " ",
  //   password: " ",
  // });

  // const [email, setEmail] = useState({
  //   email: " ",
  // });
  // const [password,setPassword] = useState({
  //   password: " "
  // });

  //{click counter}
  // const [count, setcount] = useState(0);
  // function clickHandler(e) {
  //   setcount(count + 1);
  //   e.preventDefault();
  //   // alert(`button is clicked ${count} times`)
  // }

  // const emailChangeHandler = (event) => {
  //   setCurrentForm({
  //     ...currentForm,
  //     email: event.target.value,
  //   });
  // };

  // const passwordChangehandler = (event) => {
  //   setCurrentForm({
  //     ...currentForm,
  //     password: event.target.value,
  //   });
  // };

  //  console.log(currentForm);

  // const checkLogin = (e) => {
  //   e.preventDefault();
  //   console.log(currentForm);
  //   //  let flag = false;
  //   if (currentForm.email === "aaa" && currentForm.password === "123456789") {
  //     setAuth(true);
  //     console.log("crct credentials");
  //   } else {
  //     console.log("wrong credentials ");
  //   }
  // };


  const initvalues = {
    userName: ' ',
    passWord: ' '
  }

  useFormik({
    initialValues: initvalues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(Formik);

  return (
    <div className="mainpage-div">


      <form className="form">
        <label>USERNAME : </label>
        <input type="text" name="username" />
        <br />
        <br />
        <label>PASW :&nbsp;&nbsp; </label>
        <input type="text" name="password" />
        <br />
        <br />
        <button type="submit" >LOGIN</button>
        <br />
        <br />
        
      </form>

{/* <button onClick={clickHandler}>clicked {count} times</button> */}

        {auth && <Customer />}

    </div>
  );
}

export default MainPage;
