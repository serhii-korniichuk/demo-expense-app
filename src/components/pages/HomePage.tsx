import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '../..'


type Props = {}

const HomePage = (props: Props) => {
  const {store} = useContext(Context);
  const logout = ():void => {
      store.logout();
  }

  return (
    <>
    <div>HomePage</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default observer(HomePage) 