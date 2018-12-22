import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export function configureStore () {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose( 
            applyMiddleware( sagaMiddleware ), 
            window.devToolsExtension ? window.devToolsExtension() : f => f 
        )
    );
    
    sagaMiddleware.run(rootSaga);
    
    return store;
}