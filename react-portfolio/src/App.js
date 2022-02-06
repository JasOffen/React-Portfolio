import './App.css';
import '../node_modules/uikit/dist/css/uikit.css'
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron'
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <header>
      <Nav></Nav>
      </header>
      <main>
      <Jumbotron></Jumbotron>
      <Projects/>
      </main>
    </div>
  );
}

export default App;
