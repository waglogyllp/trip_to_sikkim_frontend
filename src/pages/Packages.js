import React, { useEffect, useState } from 'react'
import PackageCard from './packegeCard.js'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const PackagesPage = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/package/all`
      )
      setData(response.data.data)
      console.log(response.data.data)
    } catch (e) {
      setError(e.message)
      toast.error(`Error fetching packages`)
    }
  }

  useEffect(() => {
    fetchPackages()
  }, [])

  console.log(data)

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.length > 0 ? (
            data.map((pack) => (
              <PackageCard
                key={pack._id}
                pack={pack}
              />
            ))
          ) : (
            <p>No packages available.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default PackagesPage
