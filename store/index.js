import {createStore,applyMiddleware} from 'redux';
import carItems from '../reducers/carItem';
import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import loggerMiddleware from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage
};



// export default  store =  createStore(carItems,[{id:2,name:"tres",price:200.99}],applyMiddleware(loggerMiddleware));

const persistedReducer = persistReducer(persistConfig, carItems)

const InitialState={cartItems:[{id:2,name:"hre",price:300}]}

export default () => {
  let store = createStore(persistedReducer,InitialState,applyMiddleware(loggerMiddleware))

  // let persistor = persistStore(store)
  const persistor = persistStore(store
    // , () => {
    // // if you want to get restoredState
    // console.log("restoredState", store.getState());
  // }
);

  return { store, persistor }
}
