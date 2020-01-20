import io from 'socket.io-client'

// DUCKS
import { socketConnected, socketDisconnected } from 'ducks/sockets'

const { REACT_APP_BACKEND_URL } = process.env
export const BASE_URL = REACT_APP_BACKEND_URL || 'http://localhost:8000'

const socket = io(BASE_URL)

export const connectSocket = store => {
  // connections
  socket.on('connect', () => store.dispatch(socketConnected()))
  socket.on('disconnect', () => store.dispatch(socketDisconnected()))
  socket.on('connect_error', () => store.dispatch(socketDisconnected()))
}
