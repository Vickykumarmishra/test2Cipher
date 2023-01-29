import logo from './logo.svg';
import './App.css';
import OriginalCard from './components/OriginalCard';
import HOC1 from './components/HOC1';
import HOC2 from './components/HOC2';

import { x } from './components/OriginalCard';
import OrigCom2 from './components/OrigCom2';
function App() {
  return (
    <div className="App">
     

     <div class="container text-center">
  <div class="row">
    <div class="col">
      <OriginalCard/>
      <OrigCom2/>
      <x/>
    </div>
    <div class="col">
      <HOC1  cmp={OriginalCard} />
    </div>
    <div class="col">
      <HOC2  cmp={OriginalCard} />
    </div>
  </div>
</div>


     
    </div>
  );
}

export default App;
