//import logo from './logo.svg';
import './App.css';

function App() {
  return (

    //JSX format--JS and HTML
    <div className="App">
      <h1>hello</h1>
      <p> This is para</p>
      <button>ClickMe</button>
      <p>{dispaly()}</p>
    </div>
  );
}
function dispaly() {
  alert("Hello react first class");
}
export default App;
