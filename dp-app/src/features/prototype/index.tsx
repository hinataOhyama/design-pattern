import React from 'react'

// JSでは全てのオブジェクトはprototypeプロパティを持っている。
// オブジェクトに特定のプロパティが存在しない場合、prototypeを遡って探す。
// これにより、オブジェクトのプロパティを共有することができる。
// 現状使い所はない。
// 一応スプレッド構文と呼ばれる知識を使ってデータをコピーし、非破壊的にデータを作成できる。
// ⇩こんなやつ
// const originalArray = [1, 2, 3];
// const newArray = [...originalArray, 4];

const PrototypePattern = () => {
  const dog = {
    bark() {
      console.log(`Woof!`);
    }
  };
  
  const pet1 = Object.create(dog);
  
  return (
    <div>
      <h2>Prototype</h2>
      <p>{pet1.bark()}</p>
      <p>Direct properties on pet1: , {Object.keys(pet1)}</p>
      <p>Properties on pet1's prototype: , {Object.keys(pet1.__proto__)}</p>
    </div>
  )
}

export default PrototypePattern
