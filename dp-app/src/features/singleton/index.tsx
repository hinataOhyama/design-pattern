import React, { useContext, useState } from 'react'
import Context from './store/context'

// Singleton pattern
// Singletonパターンは、クラスのインスタンスが1つしか存在しないことを保証するためのパターンです。
// グローバルなものに安全にアクセスするために使用されます。
// ReactContextだとインスタンスが一つなことは保証されるが、変更はできてしまう。
// そのため、useContext, reduxを使って、singletonパターンを実装する。
const SingleTonPattern = () => {
  // react-contextを使って、singletonパターンを実装する
  const data = {
    textLeft: 'data-left',
    textRight: 'data-right',
  }

  // useContextを使って、singletonパターンを実装する
  const ctx = useContext(Context)

  return (
    <div>
      <h2>SingleTon</h2>
      <Context.Provider value={data}>
        <div className="container">
          {/* ReactContextです */}
          <div className="data_left">
            {data.textLeft}
          </div>
          <div className="data_right">
            {data.textRight}
          </div>
          {/* useContextです */}
          <div className="left">
            {ctx.textLeft}
          </div>
          <div className="right">
            {ctx.textRight}
          </div>
        </div>
      </Context.Provider>

      <p></p>
    </div>
  )
}

export default SingleTonPattern
