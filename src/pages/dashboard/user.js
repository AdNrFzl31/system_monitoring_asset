import * as React from 'react'
// import '../../assets/css/global.css'
// import '../../assets/css/booctstrap.css'
import Navbar from '../../component/Navbar'

const Index = () => {
    return <div>
        <Navbar />

        <div style={{
            fontSize: '100px', color: 'blue'
        }} className="container">
            <div className='row'>
                <div className='col'>
                    hello word
                    isi dari asset
                </div>
            </div>
        </div>
    </div>
}

export default Index