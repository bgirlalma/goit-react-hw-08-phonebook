import { configureStore} from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReduсer } from './filterSlice';
import { userReducer } from 'redux/User/userSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, userReducer)
const persistContactsReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    userData: persistedReducer,
    dataContacts: persistContactsReducer,
    filters: filterReduсer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store)