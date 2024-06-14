import React, { useState } from 'react'
import { useEffect } from 'react';

export default function withLoading(Component: () => JSX.Element) {
    const WithLoadingComponent = () => {
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            const timer = setTimeout(
                () => setLoading(false)
                , 3000);
            return () => clearInterval(timer);
        })
        return loading ? <p>Loading...</p> : <Component />;
    }
    return WithLoadingComponent;
}
