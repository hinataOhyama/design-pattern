import React from 'react'
import DogImage from './components/DogImage'

// Container-Presentationalパターンは、コンポーネントをUIとロジックの2つの部分に分けるパターンです。
// 元々はContainerとPresentationalの2つのファイルに分けることが多かったが、
// 現在はContainerをhooks, apiに、Presentationalをcomponents, indexに担わせて使うことが多い。
// これをscreaming architectureと呼ぶらしい。
const ContainerPresentationalPattern = () => {
  return (
    <div>
      <h2>Container/Presentational</h2>
      <DogImage />
    </div>
  )
}

export default ContainerPresentationalPattern
