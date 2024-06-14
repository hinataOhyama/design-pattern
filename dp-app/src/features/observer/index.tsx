import { ToastContainer, toast } from "react-toastify";
// import { useObserver } from "./useObserver.js";
import { useEffect } from "react";
import { Button, FormControlLabel, Switch } from "@mui/material";

// 仕組みはある程度わかったけど、なーんか型周りでうまくいかないから一旦放置。エラーにならない様にコメントアウトしておく。
// ユースケースとしてはToastとかの通知系の処理をObserverパターンで実装するという感じかな？
// 一応RxJSというライブラリもあるみたい。
export default function App() {
  // const { subscribe, notify } = useObserver();
  // interface Data {
  //   textLeft: string;
  //   textRight: string;
  // }
  // const data: Data = {
  //   textLeft: "left",
  //   textRight: "right"
  // };

  // useEffect(() => {
  //   subscribe([toastify(data), logger(data)]);
  // }, []);

  function handleClick() {
    // notify();
  }

  function handleToggle() {
    // notify();
  }

  // function logger(data: Data) {
  //   console.log(`${Date.now()} ${data}`);
  // }

  // function toastify(data: Data) {
  //   toast('lets go!', {
  //     position: "bottom-right",
  //     closeButton: false,
  //     autoClose: 2000
  //   });
  // }

  return (
    <div className="App">
      <h2>Observer</h2>
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
    </div>
  );
}
