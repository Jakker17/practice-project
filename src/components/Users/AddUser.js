import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const inputUsernameRef= useRef();
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = inputUsernameRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and Age!'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please set an Age above 0!'
      })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    inputUsernameRef.current.value='';
    setEnteredAge("");
  };

  const errorHandler = () =>{
    setError(null);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={inputUsernameRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
