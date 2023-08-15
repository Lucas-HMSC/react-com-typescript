import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import Resumo from './Pages/Resumo';

import './style.css';

function App() {
  return (
    <div>
      <Sidenav />
      
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  )
}

export default App;
