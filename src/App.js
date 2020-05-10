import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
const LazyRender = React.lazy(()=>import('./component/CountryList'))
function App() {
  return (
    <div className="App">
     
      <ul className="collection">
      <Suspense fallback={<div>Loading...</div>}>
       <LazyRender/>
       </Suspense>
      </ul>
    </div>
  );
}

export default App;
