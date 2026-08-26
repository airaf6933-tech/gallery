import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import Footer from './component/Footer.jsx'
import Card from './component/Card.jsx'
function App() {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(8)
  const [page, setPage]= useState(1)

  const getData = async () => {
    try {
      const result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      setData(result.data)
    } catch (error) {
      console.log(error);
      
    }
  }
      useEffect(() => {
      getData()},
      [page, limit])
  return (
    <div className='flex flex-col justify-between h-screen'>

      <div className="head bg-amber-950 text-amber-50 p-3 text-3xl border-4 rounded-4xl">
        <h1 className=''>Gallery</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-3">
  {data.length > 0 ? (
    data.map((item) => <Card key={item.id} data={item} />)
  ) : (
    <p className="text-white font-bold text-center">Loading...</p>
  )}
</div>

      <div>
       <Footer setPage={setPage}  setLimit={setLimit}/>
      </div>

    </div>
  )
}

export default App
