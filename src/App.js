import { useContext } from 'react';
import './App.css';
import  { Theme } from './contexts/Theme';
import Router from './routes';

function App() {

  const {themeColor} = useContext(Theme)

  return (
    <div
        className={themeColor === 'light' ? 'container-light' : null}
    >
        <Router/>
    </div>
  );
}

export default App;