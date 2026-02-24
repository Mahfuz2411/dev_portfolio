import { useEffect } from "react";

export function useHelmet(title: string = "Portfolio") {
    useEffect(() => {
        document.title = title;
    }, []);
}


