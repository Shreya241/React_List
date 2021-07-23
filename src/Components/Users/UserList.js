import React from 'react';
import Card from '../Ui/Card';
import styles from './UserList.module.css';
const UserList=(props)=>{
return(
    <Card className={styles.users}>
    <ul>
        {props.users.map((user)=>(
            <li key={user.id}>
                {user.age} ({user.name} years old)
            </li>
        )

        )}
    </ul>
    </Card>
)
};
export default UserList;