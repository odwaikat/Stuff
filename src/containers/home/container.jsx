import React from 'react'
import LeftPanel from '../left-panel/container'
import RightPanel from '../right-panel/container'

class Home extends React.Component {
    render() {

        return (
            <div className="home-container">
                <LeftPanel/>
                <RightPanel/>
            </div>
        )
    }
}



export default Home