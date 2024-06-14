import React, { useState, createContext, useContext } from "react";

// Providerパターンは、propsのバケツリレーを避けるためのパターンです。
// ReactのContextAPIを使って、Providerパターンを実装する。
// ほぼシングルトンパターンと同じ。
// TODO: Button更新時にResetのコンポーネントが再レンダリングされるのを防ぐ
const CountContext = createContext({
  count: 0,
  setCount: (count: number) => {}
});

const Reset = () => {
  const { setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(0)}>Reset count</button>
    </div>
  );
}

const Button = () => {
  const { count, setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Current count: {count}</div>
    </div>
  );
}

const useCountContext = () => {
  const ctx = useContext(CountContext);
  if (!ctx)
    throw new Error(
      "useCountContext has to be used within CountContextProvider"
    );
  return ctx;
}

const CountContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

const ProviderPattern = () => {
  return (
    <div className="App">
      <h2>Provider</h2>
      <CountContextProvider>
        <Button />
        <Reset />
      </CountContextProvider>
    </div>
  );
}

export default ProviderPattern;

