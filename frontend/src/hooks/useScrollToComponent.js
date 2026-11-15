import {useCallback} from "react";

const useScrollToComponent = () => {

    const scrollToComponent = useCallback(function (id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, []);

    return scrollToComponent;
};

export {useScrollToComponent};