import ReactGA from "react-ga"

export const initGA = () => {
    ReactGA.initialize(process.env.REACT_APP_GA_PROPERTY_ID)
}

export const logPageView = (history) => {
    history.listen((location) => {
        const page = location.pathname || window.location.pathname;
        ReactGA.set({ page: page });
        ReactGA.pageview(page);
    })
}

export const logEvent = (category = "", action = "") => {
    if (category && action) {
        ReactGA.event({ category, action })
    }
}
