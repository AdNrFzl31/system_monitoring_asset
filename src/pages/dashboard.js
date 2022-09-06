import * as React from 'react'
// import '../../assets/css/global.css'
// import '../../assets/css/bootstrap.css'

const Index = () => {
  return <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav><br />



    <div style={{
      fontSize: '100px', color: 'blue'
    }} className="container">
      <div className='row'>
        <div className='col'>

          hello word
        </div>
      </div>
    </div>
  </div>
}

export default Index