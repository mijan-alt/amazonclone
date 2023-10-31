'use client'
import React from 'react'
import { clientStore } from './store'
import { Provider } from 'react-redux'

const ReduxProvider = ({children}) => {
  return (
    <Provider store={clientStore}>
        {children}
    </Provider>

  )
}

export default ReduxProvider