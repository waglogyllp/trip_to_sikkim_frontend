import React, { useEffect, useState } from "react"
import "../styles/booking.css" // Ensure custom styles are properly configured
import img from "../images/heroc.png"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"
import PackageCard from "./packegeCard"

const Booking = () => {
    const { slug } = useParams()

    const [packageDetails, setPackageDetails] = useState(null)
    const [packagePrice, setPackagePrice] = useState(0)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        travelDate: "",
        travelers: "",
        vehicle: "normal", // Default value
        specialRequest: "",
    })
    const [validationErrors, setValidationErrors] = useState({})

    useEffect(() => {
        fetchPackageDetails()
    }, [])

    const fetchPackageDetails = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/package/${slug}`
            )
            if (response.data.success) {
                const packageData = response.data.data
                setPackageDetails(packageData)
                setPackagePrice(packageData.travelClass.normalCar.price) // Default to normal car price
            } else {
                setPackageDetails(null)
            }
        } catch (error) {
            toast.error("Failed to fetch package details.")
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleVehicleChange = (e) => {
        const selectedVehicle = e.target.value
        setFormData((prevState) => ({ ...prevState, vehicle: selectedVehicle }))
        if (packageDetails) {
            const newPrice = packageDetails.travelClass[selectedVehicle]?.price
            setPackagePrice(newPrice || 0)
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/booking/create`,
                {
                    ...formData,
                    total: packagePrice,
                    package_id: packageDetails?._id,
                }
            )

            if (!response.data.success) {
                toast.error("Oops! Something went wrong.")
                return
            }

            toast.success(response.data.message)
            toast.success("We’ve sent you an email with the package details.")
            resetForm()
        } catch (error) {
            console.error("Form submission error:", error.response)
            if (error.response?.data?.error) {
                setValidationErrors(error.response.data.error)
            }
            toast.error("Failed to submit booking. Please try again.")
        }
    }

    const resetForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            travelDate: "",
            travelers: "",
            vehicle: "normal",
            specialRequest: "",
        })
        setValidationErrors({})
    }

    const renderValidationError = (field) => {
        return validationErrors[field] ? (
            <p className="text-red-500 text-sm">{validationErrors[field]}</p>
        ) : null
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row h-96 text-black p-4 md:p-0">
                <div className="mt-12 md:mt-24 md:ml-20 text-left w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Book Now !!
                    </h1>
                    <span className="text-3xl md:text-5xl font-bold mt-2 mb-6 block">
                        10% OFF
                    </span>
                    <p className="mb-6 text-base md:text-lg">
                        Let's Plan Your Perfect Trip to Sikkim With Us.
                        Experience the magic of Sikkim with our tailored travel
                        packages.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-full flex items-center justify-center hidden md:flex">
                    <img
                        src="/cute-girl.png"
                        alt="Girl with Backpack"
                        className="object-cover h-96 w-full"
                    />
                </div>
            </section>

            <Toaster />

            {/* Booking Form Section */}
            <section className="p-6 md:p-8 lg:p-12">
                <div className="bg-white text-black rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Booking Form
                    </h2>
                    <form onSubmit={handleFormSubmit}>
                        {/* User Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                                />
                                {renderValidationError("firstName")}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                                />
                                {renderValidationError("lastName")}
                            </div>
                        </div>
                        {/* Contact Details */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                            />
                            {renderValidationError("email")}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                            />
                            {renderValidationError("phone")}
                        </div>

                        {/* Other Details */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Travel Date
                            </label>
                            <input
                                type="date"
                                name="travelDate"
                                value={formData.travelDate}
                                onChange={handleInputChange}
                                className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                            />
                            {renderValidationError("travelDate")}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Number of Travelers
                            </label>
                            <input
                                type="number"
                                name="travelers"
                                value={formData.travelers}
                                onChange={handleInputChange}
                                className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                            />
                            {renderValidationError("travelers")}
                        </div>

                        {/* Package Details */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Your Chosen Package
                            </label>

                            {packageDetails == null ? (
                                toast.error(
                                    "Oops! Something went wrong while loading the package."
                                )
                            ) : (
                                <PackageCard pack={packageDetails} />
                            )}
                        </div>

                        {/* Vehicle Selection */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Preferred Vehicle
                            </label>
                            <select
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleVehicleChange}
                                className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                            >
                                <option value="normal">Normal Car</option>
                                <option value="small">Small Car</option>
                                <option value="luxury">Luxury Car</option>
                            </select>
                            {renderValidationError("vehicle")}
                        </div>

                        {/* Special Requests */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Special Requests
                            </label>
                            <textarea
                                name="specialRequest"
                                rows="4"
                                value={formData.specialRequest}
                                onChange={handleInputChange}
                                className="p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E69737]"
                            ></textarea>
                        </div>

                        {/* Total Price */}
                        <p className="text-lg font-bold mb-6">
                            Total Price: ₹{packagePrice}
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#3b5d50] text-white py-3 rounded-md hover:bg-[#D6892F] focus:ring-2 focus:ring-[#E69737]"
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
