import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import ReactReducer from "../reducers/react/index";

const sagas = function* sagas() {
  // yield* developerSaga();
};
const rootReducer = combineReducers({
  react: ReactReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

// Exports
export { store };
