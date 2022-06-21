import {ThemeType} from '../../utils/local-storage';
import {AppActionsType} from './app-actions';

const initialState: AppStateType = {
    theme: 'light',
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case 'APP/SET-THEME':
            return {...state, theme: action.theme};
        default:
            return state;
    }
};


type AppStateType = {
    theme: ThemeType
}