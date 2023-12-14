import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ChainProvider } from '@cosmos-kit/react';
import { wallets } from '@cosmos-kit/keplr';
import { assets, chains } from 'chain-registry';

function App() {
  return (
    <ChainProvider
      chains={[...chains]}
      assetLists={[...assets]}
      wallets={wallets}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </ChainProvider>
  );
}

export default App;
