//import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
function App() {
  return (

    //JSX format--JS and HTML
    <div className="App">
      <>
      <Welcome name='John'></Welcome>

      <Welcome name='Steve'></Welcome>
      </>
    </div>
  );
}

export default App;
