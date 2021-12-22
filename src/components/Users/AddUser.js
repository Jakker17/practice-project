import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

function AddUser(props) {

    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){return ;}
    if(+enteredAge<1){return;}
    setEnteredAge('');
    setEnteredUserName('');
  };

  const usernameChangeHandler = (event) =>{
      setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
  };


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;