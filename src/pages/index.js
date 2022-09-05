import * as React from 'react'
import '../../public/assets/css/global.css'
import '../../public/assets/css/bootstrap.css'

const Index = () => {
  return <div style={{
    fontSize
      : '100px', color: 'blue'
  }} className="container">
    <div className='row'>
      <div className='col'>
        hello word
      </div>
      <div className='col-auto'>
        <button className='btn btn-secondary'> <a href='/dasboard'>submite</a></button>
      </div>

    </div>
  </div>
}

export default Index