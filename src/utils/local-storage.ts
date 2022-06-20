export type ThemeType = 'light' | 'dark';

export const saveState = (state: ThemeType) => {
    try {
        localStorage.setItem('theme_portfolio', JSON.stringify(state))
    } catch(error) {
        return undefined
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('theme_portfolio')
        if (serializedState === null) return
        return JSON.parse(serializedState) as ThemeType
    } catch(error) {
        return undefined
    }
};