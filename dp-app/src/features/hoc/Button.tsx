import React, { useState } from "react";
import { useEffect } from "react";
import withLoading from "./withLoading";

function Button() {
  return <button>Button</button>;
}

export default withLoading(Button);
