import { InferActionsType } from "../../utils/actions";
import {ThemeType} from '../../utils/local-storage'

export type AppActionsType = InferActionsType<typeof AppActions>;

export const AppActions = {
    setTheme: (theme: ThemeType) => ({
        type: 'APP/SET-THEME',
        theme,
    } as const),
};