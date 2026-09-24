"use client";

import { createContext, ReactNode, useState } from 'react';



export const FitContext = createContext({})

const FitProvider = ( {children}: {children: ReactNode} ) => {

    const [plan, setPlan] = useState([]);
    const [save, setSave] = useState([]);

    const shareData = {
        plan,
        setPlan,
        save,
        setSave
    }

    return <FitContext.Provider value={shareData}>{children}</FitContext.Provider>
};

export default FitProvider;