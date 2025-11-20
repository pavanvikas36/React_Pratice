// import React, { useEffect, useState } from "react"
// import axios from "axios"

// const API_URL = "https://dummyjson.com/products"

// const App = () => {
//   const [search, setSearch] = useState("")
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     const getInitialUsers = async () => {
//       try {
//         const res = await axios(API_URL)
//         setProducts(res.data.products)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getInitialUsers()
//   }, [])

//   const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))

//   return (
//     <div>
//       <h2>Product Directory App</h2>
//       <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
//       <div>
//         {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <img src={product.thumbnail} alt={product.title}/>
//             <div>
//               <h2>{product.title}</h2>
//               <p><strong>Brand : </strong>{product.brand}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "https://dummyjson.com/products"

const App = () => {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getInitialProducts = async () => {
      try {
        const res = await axios(API_URL)
        setProducts(res.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    getInitialProducts()
  }, [])

  // Filter logic
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Product Directory App
      </h2>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                <strong>Brand:</strong> {product.brand}
              </p>

              <p className="text-blue-600 font-bold mt-2 text-lg">
                ₹{product.price * 83}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
