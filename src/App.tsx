import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import './styles/global.css';

export function App() {
  return (
    <>
      <h1>Zustand Store Testing</h1>
      <UserForm />
      <UsersList />
    </>
  );
}