import { useEffect } from "react";
import { useLocation } from "react-router";

const ROUTE_TITLES: Record<string, string> = {
    "/": "Home",
    "/about": "About Me",
    "/projects": "Projects",
    "/skills": "Skills",
    "/timeline": "Timeline",
    "/contact": "Contact",
    "/services": "Services",
};

const APP_NAME = "Thineth Wick";

export function usePageTitle() {
    const { pathname } = useLocation();

    useEffect(() => {
        const label = ROUTE_TITLES[pathname] ?? "Page";
        document.title = `${label} | ${APP_NAME}`;
    }, [pathname]);
}