import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {console.log(props.users)}
        {props.users.map((user) => (
          <li key={ props.users.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
