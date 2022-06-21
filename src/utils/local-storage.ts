import {RootStateType} from "../components/app/store";

export type ThemeType = 'light' | 'dark';

export const saveState = (state: RootStateType) => {
    try {
        localStorage.setItem('portfolio-app', JSON.stringify(state))
    } catch(error) {
        return undefined
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('portfolio-app')
        if (serializedState === null) return
        return JSON.parse(serializedState) as RootStateType
    } catch(error) {
        return undefined
    }
};