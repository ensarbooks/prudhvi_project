import UserFinder from './components/UserFinder';
import UsersContext from './store/user-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Alice Adams' },
  { id: 'u2', name: 'Benjamin Baker' },
  { id: 'u3', name: 'Charlotte Carter' },
  { id: 'u4', name: 'David Dawson' },
  { id: 'u5', name: 'Emily Evans' },
  { id: 'u6', name: 'Franklin Foster' },
  { id: 'u7', name: 'Grace Gardner' },
  { id: 'u8', name: 'Henry Hayes' },
  { id: 'u9', name: 'Isabella Ingram' },
  { id: 'u10', name: 'Jack Johnson' },
  { id: 'u11', name: 'Katherine King' },
  { id: 'u12', name: 'Liam Lawson' },
  { id: 'u13', name: 'Mia Mitchell' },
  { id: 'u14', name: 'Nathan Nelson' },
  { id: 'u15', name: 'Olivia Owens' },
  { id: 'u16', name: 'Patrick Porter' },
  { id: 'u17', name: 'Quinn Quinnell' },
  { id: 'u18', name: 'Rachel Robinson' },
  { id: 'u19', name: 'Samuel Stone' },
  { id: 'u20', name: 'Taylor Turner' },
];


function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;

