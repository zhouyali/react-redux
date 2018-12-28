import { createStore,applyMiddleware } from 'redux';
//注意createStore 是redux中的 而非 react的
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
// import mySaga from './sagas';
// const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(thunk,logger)
    // applyMiddleware(sagaMiddleWare,logger),
);
// sagaMiddleWare.run(mySaga);
export default store;

//使用中间件3步  1 引入 2 create 3 传入applyMiddleWare