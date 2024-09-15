import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Image from '../images/gangtok.jpeg'
import LoadingBar from 'react-top-loading-bar'

const PackageDetailsPage = () => {
  const { slug } = useParams()
  const { state } = useLocation()
  const [data, setData] = useState(state?.pack || null)

  const ref = useRef(null)

  const getPackageBySlug = async (slug) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/package/${slug}`
      )
      if (response.data.success) {
        setData(response.data.data)
      } else {
        setData(null)
      }
    } catch (e) {
      console.error('Error fetching package:', e)
      setData(null)
    }
  }

  useEffect(() => {
    if (!data) {
      getPackageBySlug(slug)
    }
  }, [slug])

  useEffect(() => {
    console.log(data)
  }, [data])

  if (!data) {
    return <p className="text-center text-red-500">Package not found</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <LoadingBar
        color="#06402B"
        ref={ref}
      />
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <img
          src={Image}
          className="w-full h-64 object-cover rounded-lg mb-6"
          alt={data.name}
        />
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <p className="text-gray-700 mb-6">{data.description}</p>

        <Link to={`/booking/${data.slug}`}>
          <button
            onClick={() => ref.current.complete()}
            className="bg-[#3b5d50] text-white px-6 py-3 rounded-lg hover:bg-[#3b5d50] transition-colors"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PackageDetailsPage
