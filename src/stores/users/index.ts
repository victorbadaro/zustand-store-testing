import create from 'zustand';

interface User {
  id: string;
  name: string;
}

interface UseUsers {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (id: string) => void;
}

export const useUsers = create<UseUsers>((set, get) => ({
  users: [],

  addUser(user) {
    const newUser: User = {
      id: crypto.randomUUID(),
      name: user.name
    };

    set({
      users: [ ...get().users, newUser ]
    });
  },

  removeUser(id) {
    const filteredUsers = get().users.filter(user => user.id !== id);

    set({
      users: filteredUsers
    });
  }
}));