"use client";

import { ILibrary } from '@/types/libraryType';
import { createContext, ReactNode, useState } from 'react';

interface ILibraryContext {
    plan: ILibrary [];
    setPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
    save: ILibrary [];
    setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}


export const FitContext = createContext<ILibraryContext>({
    plan: [],
    setPlan: () => {},
    save: [],
    setSave: () => {}
})

const FitProvider = ( {children}: {children: ReactNode} ) => {

    const [plan, setPlan] = useState<ILibrary[]>([]);
    const [save, setSave] = useState<ILibrary[]>([]);

    const shareData = {
        plan,
        setPlan,
        save,
        setSave
    }

    return <FitContext.Provider value={shareData}>{children}</FitContext.Provider>
};

export default FitProvider;