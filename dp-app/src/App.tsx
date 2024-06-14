import './App.css';
import ContainerPresentationalPattern from './features/container-presentation';
import HocPattern from './features/hoc';
import ObserverPattern from './features/observer';
import PrototypePattern from './features/prototype';
import ProviderPattern from './features/provider';
import ProxyPattern from './features/proxy';
import SingleTonPattern from './features/singleton';

function App() {
  return (
    <div className="App">
      <SingleTonPattern />
      <ProxyPattern />
      <ProviderPattern />
      <PrototypePattern />
      <ContainerPresentationalPattern />
      <ObserverPattern />
      <HocPattern />
    </div>
  );
}

export default App;
