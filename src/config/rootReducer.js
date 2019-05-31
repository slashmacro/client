import { combineReducers } from 'redux'

// reducers
import NavbarReducer from 'components/Layout/Navbar/reducer'
import MacroReducer from 'routes/Macro/reducer'

const rootReducer = combineReducers({
  user: NavbarReducer,
  macros: MacroReducer
})

export default rootReducer
