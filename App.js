import React from 'react'
import AppContainer from './route'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )

  }

}


export default App