import React from 'react'
import Colorizer from './Colorizer'
//Changed the App.css to App12.css
import './App12.css'

class MainApp12 extends React.Component {
  render () {
    return (
      <div className="mainConatiner">
        <Colorizer />
        <div>
          <p>
            På denna sida har jag använt react-dom och Portals för att lägga ett heading element överst
            i index.html.
          </p>
          <a href="https://reactjs.org/docs/portals.html" target="_blank">https://reactjs.org/docs/portals.html</a>
        </div>

      </div>
    );

  }
}

export default MainApp12;
