import React, { useState } from 'react'
import { useEffect } from 'react';
import withLoading from './withLoading';

function Input() {
    return <input defaultValue={"Input"} />;
}

export default withLoading(Input); // HOCからcomponentをリターンしてもらう
