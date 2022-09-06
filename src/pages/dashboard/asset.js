import * as React from 'react'
// import '../../assets/css/global.css'
// import '../../assets/css/bootstrap.css'
import { useState } from 'react'


import Navbar from '../../component/Navbar'


const Index = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [asset, setAsset] = useState([{ no: 1, name: "Meja", price: "1jt" }, { no: 2, name: "Kursi", price: "1jt" }])

    const add = (event) => {
        event.preventDefault()
        const update = [...asset, { no: asset.length + 1, name: name, price: price }]
        console.log(update)
        setAsset(update)
    }

    return (
        <div>
            <Navbar />

            <div style={{
                color: 'blue'
            }} className="container">
                <h1 >Asset</h1>
                <div className='row'>
                    <form className='row' onSubmit={add}>
                        <div class="col mb-3" >
                            <input
                                onChange={(event) => {
                                    console.log(event)
                                    setName(event.target.value)
                                }} type="text" class="form-control" id="Assetname" placeholder="Asset name..." />
                        </div>
                        <div class="col mb-3">
                            <input
                                onChange={(event) => {
                                    console.log(event)
                                    setPrice(event.target.value)
                                }} type="text" class="form-control" id="Assetprice" placeholder="Asset price..." />
                        </div>
                        <div class="col-auto mb-auto">
                            <button class="btn btn-outline-primary" type="submit" >submite</button>
                        </div>
                    </form>
                    <div className='col'>
                        <table className='table table-bordered '>
                            <thead className='table-primary'>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asset.map((item) => {
                                    return <tr>
                                        <th>{item.no}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Index