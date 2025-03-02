import { CreateNewUser } from './components/CreateNewUser';
import { ListOfUsers } from './components/ListOfUsers';

const App = () => {
  return (
    <div className="max-w-7xl flex flex-col gap-10 mx-auto p-4">
      <ListOfUsers />
      <CreateNewUser />
    </div>
  );
};

export default App;
