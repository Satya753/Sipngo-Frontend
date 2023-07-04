import logo from './logo.svg';
import './App.css';
import EmailAdd from './Components/EmailAdd';
import FreshOrganic from './Components/FreshOrganic';

function App() {
  return (
    <div className="App">
      <section className= "section">
        <EmailAdd></EmailAdd>
      </section>
      <section className= "section">
        <FreshOrganic></FreshOrganic>
      </section>
    </div>
  );
}

export default App;
