//import logo from './logo.svg';
import './App.css';
import AppRouter from './adminComponents/AppRouter';
//import Branch from './adminComponents/Branch';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDash from './adminComponents/AdminDash';

function App() {
  return (
    <div className='App'>

         <AppRouter/>
         {/* <AdminDash/> */}
       
    </div>
  );
}

export default App;
