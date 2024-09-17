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
// import Razorpay from "razorpay"

const Booking = () => {
    const { slug } = useParams()

    const [data, setData] = useState([]) // Changed default value to null
    const [packagePrice, setPackagePrice] = useState()

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
                setPackagePrice(response.data.data.travelClass.normalCar.price) // Set the default package price
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

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        travelDate: "",
        travelers: "",
        vehicle: "normal", // Setting a default value for the select field
        specialRequest: "",
    })

    const [order, setOrder] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/order/create`,
                {
                    ...formData,
                    package_id: data._id,
                    total: packagePrice,
                }
            )

            setOrder(response.data)

            if (!response.data.success) {
                alert(response.data.message)
            }

            /*  const rzpayOptions = {
                key: "rzp_test_CbA7Z0GwqqJ6Dn",
                amount: order.total * 100,
                currency: "INR",
                name: "Sikkim Tour",
                description: "Payment for your Sikkim Tour",
                image: "https://example.com/your_logo",
                order_id: order.id,
                handler: async function (response) {
                    try {
                        const paymentResponse = await axios.post(
                            `${process.env.REACT_APP_BASE_URL}/order/verify`,
                            {
                                order_id: order.id,
                                payment_id: response.razorpay_payment_id,
                                signature: response.razorpay_signature,
                            }
                        )

                        if (paymentResponse.data.success) {
                            alert("Payment successful!")
                        } else {
                            alert("Payment failed. Please try again.")
                        }
                    } catch (e) {
                        console.error("Error during payment:", e.message)
                        alert("Payment failed. Please try again.")
                    }
                },
                prefill: {
                    name: formData.firstName + " " + formData.lastName,
                    email: formData.email,
                    contact: formData.phone,
                },
                notes: {
                    address: "Sikkim Tour",
                },
                theme: {
                    color: "#F37254",
                },
            }

            const rpay = new Razorpay(rzpayOptions)

            rpay.open() */

            var options = {
                key: "rzp_test_CbA7Z0GwqqJ6Dn", // Enter the Key ID generated from the Dashboard
                amount: data.message.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: data.message.currency,
                name: "AbhiTech", //your business name
                description: "Test Transaction",
                image: "https://0.gravatar.com/avatar/7fb6173c4d9f1de4dc75b11b4a6375dd0754ee9a76541f2414e3efc5506ba9a2?size=512",
                order_id: data.message.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: "http://localhost:8000/order/verify",
                redirect: true,
                handler: async function (response) {
                    console.log(response.razorpay_payment_id)
                    console.log(response.razorpay_order_id)
                    console.log(response.razorpay_signature)
                    alert(response)
                },
                prefill: {
                    //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    name: "Abhisek Adhikari", //your customer's name
                    email: "abhisekadhikari1906@gmail.com",
                    contact: "6296767187", //Provide the customer's phone number for better conversion rates
                },
                notes: {
                    address: "My Address",
                },
                theme: {
                    color: "#3399cc",
                },
            }
            // const rzp1 = new Razorpay(options)
            // rzp1.open()
        } catch (e) {
            console.log("Error during booking:", e)
            // alert("An error occurred. Please try again.")
        }
    }

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
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Your Chosen Package
                            </label>
                            <div className="flex items-center p-3 w-full rounded-md border border-gray-300 shadow-sm">
                                {/* Package image */}
                                <img
                                    src={img} // Replace with your image URL
                                    alt="Package"
                                    className="w-12 h-12 rounded-md mr-4"
                                />
                                {/* Package title */}
                                {/* <input
                                    type="text"
                                    name="packageTitle"
                                    value={formData.packageTitle}
                                    onChange={handleChange}
                                    className="w-full border-none focus:outline-none"
                                    placeholder="Package title"
                                /> */}
                                <p>{data.title}</p>
                            </div>
                        </div>
                        {/* Select Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Preferred Vehicle
                            </label>
                            <select
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                                value={formData.vehicle}
                                onChange={(e) => {
                                    handleChange(e) // Update the form data
                                    // Update the package price based on the selected vehicle type
                                    const selectedVehicle = e.target.value
                                    if (selectedVehicle === "normal") {
                                        setPackagePrice(
                                            data.travelClass.normalCar.price
                                        )
                                    } else if (selectedVehicle === "small") {
                                        setPackagePrice(
                                            data.travelClass.smallCar.price
                                        )
                                    } else if (selectedVehicle === "luxury") {
                                        setPackagePrice(
                                            data.travelClass.luxuryCar.price
                                        )
                                    }
                                }}
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

                        <p>
                            Total Price:{" "}
                            <span className="font-bold">₹{packagePrice}</span>
                        </p>

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
