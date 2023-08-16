import { useUsers } from "../../stores/users";

export function UsersList() {
  const users = useUsers(state => state.users);
  const removeUser = useUsers(state => state.removeUser);

  if(!users.length)
    return <h2>There are no users to show</h2>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {`${user.id} - ${user.name}`}
          <button
            type="button"
            onClick={() => removeUser(user.id)}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}