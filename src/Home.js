import React from 'react'
import Products from './Products'
function Home() {
  return (
    <div>
        <div className='w-100'>
            <img src="/images/grand-bazaar-3.jpg" className='w-100' style={{height:"400px"}} alt="grand bazaar"/>
        </div>
        <div className='products bg-light p-3'>
            <div className='p-3 d-flex'>
                <div className='w-50 p-2 m-2 bg-white '>
                    <Products
                    id={1223}
                    title={"MacBook"}
                    image={"pc.jpeg"}
                    rating={4}
                    price={100000}
                    />
                </div>
                <div className='w-50 p-2 m-2 bg-white'>
                    <Products
                     id={1224}
                     title={"Rolex"}
                     image={"rolex.webp"}
                     rating={5}
                     price={400000}
                    />
                </div>
            </div>
            <div className='p-3 d-flex' col>
                <div className='p-2 m-2 bg-white col '>
                    <Products
                     id={1225}
                     title={"Wooden chair"}
                     image={"chair.webp"}
                     rating={3}
                     price={10000}
                    />
                </div>
                <div className='p-2 m-2 bg-white col'>
                    <Products
                     id={1226}
                     title={"Denim jacket"}
                     image={"jacket.webp"}
                     rating={2}
                     price={1000}
                    />
                </div>
                <div className='p-2 m-2 bg-white col'>
                    <Products
                     id={1227}
                     title={"Jordan shoes"}
                     image={"jordan.webp"}
                     rating={5}
                     price={20000}
                    />
                </div>
            </div>
            <div className='p-3'>
                <div className='p-2 m-2 bg-white d-flex justify-content-center'>
                    <Products
                     id={1228}
                     title={"Sunglasses"}
                     image={"sunglasses.jpg"}
                     rating={4}
                     price={700}
                    />
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Home