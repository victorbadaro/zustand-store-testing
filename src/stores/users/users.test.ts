import { act, renderHook } from '@testing-library/react';
import { useUsers } from '.';

describe('users store', () => {
  it('Should initialize the store without any users', () => {
    const { result } = renderHook(() => useUsers());

    expect(result.current.users.length).toBe(0);
  });

  it('Should add an user in the store after calling the addUser function', () => {
    const { result } = renderHook(() => useUsers());

    act(() => {
      result.current.addUser({ name: 'Victor Badaró' });
    });

    expect(result.current.users.length).toBe(1);
  });

  it('Should remove a specific user from the store after calling the removeUser function', () => {
    const { result } = renderHook(() => useUsers());
    
    act(() => {
      useUsers.setState({
        users: [{ id: '1', name: 'Miryam Santana' }]
      });
    });

    expect(result.current.users.length).toBe(1);

    act(() => {
      result.current.removeUser('1');
    });

    expect(result.current.users.length).toBe(0);
  });
});