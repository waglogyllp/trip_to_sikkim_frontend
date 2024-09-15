import React, { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { packages } from "./data"
import axios from "axios" // Adjust the import based on your file structure
import Image from "../images/gangtok.jpeg"

const PackageDetailsPage = () => {
    const { slug } = useParams()

    const [data, setData] = useState([])

    const getPackageById = async (slug) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/package/${slug}`
            )
            if (!response.data.success)
                return (
                    <p className="text-center text-red-500">
                        Package not found
                    </p>
                )

            setData(response.data.data)
        } catch (e) {
            return <p className="text-center text-red-500">Package not found</p>
        }
    }

    useEffect(() => {
        getPackageById(slug)
    }, [])

    /*if (!pack) {
      return <p className="text-center text-red-500">Package not found</p>;
    }*/

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <img
                    src={Image}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <p className="text-gray-700 mb-6">{data.description}</p>

                <Link to={`/booking/${data.slug}`}>
                    <button className="bg-[#3b5d50] text-white px-6 py-3 rounded-lg hover:bg-[#3b5d50] transition-colors">
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PackageDetailsPage
