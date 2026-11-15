import {createContext, useContext, useState} from "react";
import {useHover} from "./useHover.js";

const HoveredContext = createContext(null);

export function HoveredProvider({ children }) {

    const [isHovered, onHover] = useHover();

    return (
        <HoveredContext.Provider value={[isHovered, onHover]}>
            {children}
        </HoveredContext.Provider>
    );
}

export function useHoveredContext() {
    const context = useContext(HoveredContext);

    if (!context) {
        throw new Error("useHoveredContext must be used within a HoveredProvider");
    }

    return context;
}
