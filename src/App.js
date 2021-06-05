import logo from './logo.svg';
import './App.css';
import FoldersExplorer from './FoldersExplorer/FoldersExplorer'
import {entities} from './consts'

function App() {
  return (
    <div className="App">
      <div className="main-section">
        <FoldersExplorer data={entities}></FoldersExplorer>
        <div className="header">Folders Explorer</div>
      </div>
      <div className="devName"><span>Angelika Yakushin</span></div>
    </div>
  );
}

export default App;
