import * as authThunks from './actions'
import { authSlice } from './reducer'

const auth = { ...authSlice.actions, ...authThunks }

export { auth }
