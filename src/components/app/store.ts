import { combineReducers, legacy_createStore as createStore } from "redux";
import { loadState, saveState } from "../../utils/local-storage";
import { appReducer } from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
});

export const store = createStore(rootReducer, loadState());

export type RootStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
    saveState({
        app: store.getState().app,
    })
})

// @ts-ignore
window.store = store;