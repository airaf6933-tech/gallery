import React from 'react'

const Footer = ({ setPage, setLimit }) => {
  return (
    <div className="bg-amber-950 shadow-2xl flex justify-between items-center text-amber-50 font-semibold p-4 rounded-2xl mt-4">
      <div className="flex items-center gap-5">
        <h1 className="text-amber-200">Pages</h1>
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className=" bg-amber-900 hover:bg-amber-700 text-amber-100 px-3 py-1 rounded-lg transition-colors"
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <select
        onChange={(e) => setLimit(e.target.value)}
        className="w-[100px] outline-none bg-amber-900 text-amber-100 rounded-lg p-2 cursor-pointer"
        defaultValue="8"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="80">80</option>
        <option value="100">100</option>
      </select>
    </div>
  )
}

export default Footer