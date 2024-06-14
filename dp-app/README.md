# design pattern with React, JavaScript

デザインパターンの実装をJSで行うときに、足りていなかった知識を書き殴った。
[Shinya Fujinoさんの記事](https://zenn.dev/morinokami/books/learning-patterns-1/viewer/forward)を参考に進める。

## シングルトンパターン

- [useContextの使い方](https://takayamato.com/react-usecontext/)

## プロキシパターン

- [proxyオブジェクトとは](https://qiita.com/irico/items/86a03db80bb081f59519)
- [mozillaのProxy解説](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [in演算子とは](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/in)
- [genericsの記述](https://teratail.com/questions/287760)
- Reflectを使う理由
  - トラップをメソッドとして使える。
  - Proxyオブジェクト自身をトラップ内で返せる。（要はthisみたいに使える）

## プロバイダパターン

- ほぼシングルトンパターンと同じ

## プロトタイプパターン

- [prototype周りのjsプロパティ](https://zenn.dev/aidemy/articles/class-prototype-of-js)
- [スプレッド構文を使う理由](https://zenn.dev/yutabeee/articles/99393031e51087)

## コンテナ・プレゼンテーションパターン

- [screaming architecture](https://zenn.dev/porokyu32/articles/2e6511fa8b606d)
- [featuresを導入するメリット](https://zenn.dev/yodaka/articles/eca2d4bf552aeb)

## オブザーバパターン

- [配列になってるuseStateをいじるときのベストプラクティス](https://ja.react.dev/learn/updating-arrays-in-state)
- [react-toastifyの公式リファレンス](https://fkhadra.github.io/react-toastify/introduction/)
- [トーストのヘルパー関数(超便利かも)](https://zenn.dev/koyabluetech/articles/a2fbe4f8d65968)
- [Reactでobserverパターンを実装してみた](https://shimotsu.hatenablog.com/entry/2022/01/19/174828)

## モジュールパターン

- 普段やってるコンポーネントごとにファイルを作って、１ファイル１エクスポートでやってる行為自体がモジュールパターン。なので省略する。

## ミックスインパターン

- 以下のように述べられていたので、hooksがミックスインパターンに相当するものとし省略する。

> ES6 クラスが導入される以前は、React のコンポーネントに機能を追加するためにミックスインがよく使われていました。React チームは、現在はミックスインの使用を推奨していません。ミックスインはコンポーネントを不要に複雑にしがちで、保守や再利用を困難にするためです。React チームは代わりに高階コンポーネントの使用を推奨していましたが、これは現在ではフックにより置き換えられる場合が多いです。
> ミックスインは、オブジェクトのプロトタイプに機能を注入することで、継承をおこなわずにオブジェクトに機能を追加することを可能にします。オブジェクトのプロトタイプを変更することは、プロトタイプ汚染や関数の出所が明らかでなくなる原因となるため、バッドプラクティスと考えられています。

## メディエータ・ミドルウェアパターン

- バックエンド開発のhttpリクエストからレスポンスの間で、CORSや認証系のヘッダなどのミドルウェアを噛ませるときに、メディエータとなるチェーンを介して設計することで、httpリクエストを追跡・変更できるようになるらしい。
- Expressのlistenとreactのサーバーを同時に立てる方法がわからないからコードだけコピペ

## HOCパターン(Higher Order Component)

- 命名規則はwith~~
- 受け取ったコンポーネントは一切修正せずに共通処理を梱包して返すだけ
- [簡単な例](https://qiita.com/jungyeounjae/items/6905bb1de6319dee2c5a)
- 共通処理を入れる一番階層の高いcomponentsディレクトリには、こういうのを入れたら良さそう。
