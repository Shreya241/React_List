import React, { useState } from "react";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import styles from "./AddUser.module.css";
import ErrorModel from "../Ui/ErrorModel";


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError]= useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 ){
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name(non-empty value).'
      });  
      return;
    }
    if(+enteredAge<1){
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age(>0).'
      });
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
   setError(null);
  }
  

  return (
<div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModel>}
    <Card className={styles.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
