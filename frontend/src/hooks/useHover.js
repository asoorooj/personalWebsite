import {useCallback, useState} from "react";

const useHover = function () {
    const [hover, setHover] = useState(false);

    const onHover = useCallback(function () {
        setHover(prev => !prev);
    }, [setHover]);

    return [hover, onHover];
};

export {useHover};