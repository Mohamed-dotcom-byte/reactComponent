import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';

function App() {
  return (
    <div className="App">
 <div>
   <FullName/>
 </div>
 <div>
   <ProfilPhoto/>
 </div>
 <div>
   <Address/>
 </div>

 </div>
  );
}

export default App;
