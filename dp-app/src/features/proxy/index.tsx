import React from 'react'

// Proxyパターンは、オブジェクトの振る舞いを拡張するためのパターンです。
// 実践的な例では、以下があります。
// - データが妥当かどうかバリデーションをかける
// - 権限の確認をする
// - キャッシュを保存する
// - ロギング
// - 遅延処理
const ProxyPattern = () => {
  interface Person {
    name: string;
    age: number;
    nationality: string;
  }
  
  const person: Person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
  };

  const personHandler: ProxyHandler<typeof person> = {
    get(target: Person, prop: string, receiver: Person): Person | string {
      if (prop === "age") {
        return target[prop] + " years old";
      }
      return Reflect.get(target, prop, receiver);
    }
  };
  
  const personProxy = new Proxy(person, personHandler);

  return (
    <div>
      <h2>Proxy</h2>
      <p>{personProxy.name}</p>
      <p>{personProxy.age = 43}</p>
      <p>{personProxy.name = "Jane Doe"}</p>
    </div>
  )
}

export default ProxyPattern
