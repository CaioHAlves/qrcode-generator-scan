import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  getStoredState,
  FLUSH,
  PAUSE,
  PERSIST,
  REHYDRATE,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import myData from './modules/myData'

const reducers = combineReducers({
  myData
})

const persistConfig = {
  key: 'CaioHAlves',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: { trace: true },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
})
const persistor = persistStore(store)

function persistorInit() {
  getStoredState({
    storage,
    key: 'CaioHAlves'
  })
}

persistorInit()

export type RootState = ReturnType<typeof store.getState>

export { store, persistor }
