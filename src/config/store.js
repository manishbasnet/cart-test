import { createStore, combinedReducers } from 'redux'

const rootReducer = combinedReducers({

})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store