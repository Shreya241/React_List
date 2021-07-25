import React, { useState, useRef } from "react";
import Card from "../Ui/Card";
import Wrapper from "../Helpers/Wrapper";
import Button from "../Ui/Button";
import styles from "./AddUser.module.css";
import ErrorModel from "../Ui/ErrorModel";

const AddUser = (props) => {
  const nameInputRef= useRef();
  const ageInputRef= useRef();

  const [error, setError] = useState();
  
  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name(non-empty value).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(>0).",
      });
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  };

 
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
           
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
          
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
