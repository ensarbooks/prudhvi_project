import { useContext } from 'react';
import UsersContext from '../store/user-context';
import classes from './User.module.css';

const User = (props) => {
  const usersContext = useContext(UsersContext);

  const handleUserClick = () => {
    // Example: Call a function from the context when a user is clicked
    usersContext.someFunction(props.id);
  };

  return (
    <li className={classes.user} onClick={handleUserClick}>
      {props.name}
    </li>
  );
};

export default User;
