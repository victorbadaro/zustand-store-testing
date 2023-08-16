import { FormEvent, useEffect, useRef, useState } from "react";
import { useUsers } from "../../stores/users";

export function UserForm() {
  const [name, setName] = useState('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const addUser = useUsers(state => state.addUser);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    addUser({ name });
    setName('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        ref={nameInputRef}
        type="text"
        name="name"
        placeholder="Name"
        onChange={event => setName(event.target.value)}
        value={name}
      />

      <button type="submit">Create user</button>
    </form>
  );
}