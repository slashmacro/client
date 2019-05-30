import { combineReducers } from 'redux'

// reducers
import NavbarReducer from 'components/Layout/Navbar/reducer'

const rootReducer = combineReducers({
  user: NavbarReducer
})

export default rootReducer
