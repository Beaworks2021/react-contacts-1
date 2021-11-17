import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";
import firebase from "../firebase/Config";
import { getFirebase, reduxReactFirebase, firebaseReducer, } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk"


const reducers = combineReducers({
    users: usersReducer,
    firebase: firebaseReducer,
  });


const store = createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
)
    
    );

export default store;
