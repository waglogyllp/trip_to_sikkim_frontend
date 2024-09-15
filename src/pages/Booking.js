import React, { useEffect, useState } from "react"
import { FaMapSigns, FaHandHoldingUsd, FaHeadset, FaLock } from "react-icons/fa" // Import FontAwesome icons
import "../styles/booking.css" // Ensure you create and import your custom styles if needed
import img from "../images/heroc.png"
import heroImage from "../images/fourdham.png"
import truck from "../images/truck.svg"
import support from "../images/support.svg"
import retu from "../images/return.svg"
import bag from "../images/bag.svg"
import { useParams } from "react-router-dom"
import axios from "axios"

const Booking = () => {
    const { slug } = useParams()

    console.log(slug)

    const [data, setData] = useState([]) // Changed default value to null
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        travelDate: "",
        travelers: "",
        vehicle: "normal", // Setting a default value for the select field
        specialRequest: "",
        package_id: data._id,
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const getPackageDetails = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/package/${slug}`
            )

            if (response.data.success) {
                setData(response.data.data) // Correctly update the data state with package details
            } else {
                setData(null) // If no success, set data to null
            }
        } catch (e) {
            console.error("Error fetching package details:", e.message)
            setData(null)
        }
    }

    useEffect(() => {
        getPackageDetails()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData)

            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/order/create`,
                formData
            )

            console.log(response.response)

            if (response.data.success) {
                alert("Booking successful!")
            }
        } catch (e) {
            console.log("Error during booking:", e.response.data)
            // alert("An error occurred. Please try again.")
        }
    }

    console.log(data)

    return (
        <div className="">
            <section className="flex flex-col md:flex-row h-96 text-black p-4 md:p-0">
                <div className="mt-12 md:mt-24 md:ml-20 text-left w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Book Now !!
                    </h1>
                    <span className="text-3xl md:text-5xl font-bold mt-2 mb-6 block">
                        10% OFF
                    </span>
                    <p className="mb-6 text-base md:text-lg">
                        Let's Plan Your Perfect Trip To Sikkim With Us.
                        Experience the magic of Sikkim with our tailored travel
                        packages.
                    </p>

                    <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
                        {/* Add any additional content or buttons here */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex items-center justify-center hidden md:flex">
                    <img
                        src="/cute-girl.png"
                        alt="Girl with Backpack"
                        className="object-cover h-96 w-full"
                    />
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="p-6 md:p-8 lg:p-12">
                <div className="bg-white text-black rounded-lg shadow-lg p-6 relative overflow-hidden">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Booking Form
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Travel Date
                            </label>
                            <input
                                type="date"
                                name="travelDate"
                                value={formData.travelDate}
                                onChange={handleChange}
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Number of Travelers
                            </label>
                            <input
                                type="number"
                                name="travelers"
                                value={formData.travelers}
                                onChange={handleChange}
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>

                        {/* Select Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Preferred Vehicle
                            </label>
                            <select
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                                value={formData.vehicle}
                                onChange={handleChange}
                                name="vehicle"
                            >
                                <option value="normal">Normal Car</option>
                                <option value="small">Small Car</option>
                                <option value="luxury">Luxury Car</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Special Requests
                            </label>
                            <textarea
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                                rows="4"
                                name="specialRequest"
                                value={formData.specialRequest}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#3b5d50] text-white py-3 rounded-md hover:bg-[#D6892F] focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                        >
                            Submit Booking
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Booking
