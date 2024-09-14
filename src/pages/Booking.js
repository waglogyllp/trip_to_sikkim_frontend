import React, {useEffect, useState} from "react"
import {FaMapSigns, FaHandHoldingUsd, FaHeadset, FaLock} from "react-icons/fa" // Import FontAwesome icons
import "../styles/booking.css" // Ensure you create and import your custom styles if needed
import img from "../images/heroc.png"
import heroImage from "../images/fourdham.png"
import truck from "../images/truck.svg"
import support from "../images/support.svg"
import retu from "../images/return.svg"
import bag from "../images/bag.svg"
import {useParams} from "react-router-dom";
import axios from "axios";

const Booking = () => {

    const {slug} = useParams();
    const [data , setData ] = useState([])

    const getPackageDetails = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/package/${slug}`)
            if(!response.data.success)
                setData(response.data.message)
        }
        catch (e){
            setData(e.message)
        }

    }

    useEffect(() => {
        getPackageDetails()
    }, []);


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

            <section
                className="relative p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Why Book With Us Section */}
                <div className="lg:w-1/2 bg-white text-black rounded-lg shadow-lg p-6 relative overflow-hidden">
                    <div
                        className="absolute inset-0 -top-8 -left-8 bg-[#688D7F] rounded-full transform rotate-45 opacity-20"></div>
                    <div
                        className="absolute inset-0 -bottom-8 -right-8 bg-[#3b5d50] rounded-full transform rotate-45 opacity-20"></div>
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Why Book With Us?
                    </h2>
                    <p className="text-lg mb-6 text-center text-gray-700">
                        At Trip-To-Sikkim, we are committed to providing an
                        exceptional travel experience tailored to your needs.
                        Our dedicated team ensures every aspect of your journey
                        is smooth and enjoyable. Here’s why travelers choose us
                        for their Sikkim adventures:
                    </p>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start space-x-4">
                            <FaMapSigns className="text-[#E69737] text-2xl"/>
                            <div>
                                <strong>Expert Guides:</strong> Our
                                knowledgeable guides are passionate about Sikkim
                                and provide insightful tours.
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaHandHoldingUsd className="text-[#E69737] text-2xl"/>
                            <div>
                                <strong>Customizable Packages:</strong> We offer
                                flexible packages to suit your preferences and
                                budget.
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaHeadset className="text-[#E69737] text-2xl"/>
                            <div>
                                <strong>24/7 Support:</strong> Our support team
                                is available around the clock to assist you.
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaLock className="text-[#E69737] text-2xl"/>
                            <div>
                                <strong>Secure Payments:</strong> Your payment
                                information is protected with top-level security
                                measures.
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Additional Features */}
                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="feature">
                        <div className="icon mb-4">
                            <img
                                src={truck}
                                alt="Fast & Free Shipping"
                                className="img-fluid"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Fast & Free Shipping
                        </h3>
                        <p className="text-base">
                            We ensure your travel documents and essentials are
                            delivered swiftly and at no extra cost. Enjoy peace
                            of mind knowing your paperwork will be handled
                            promptly.
                        </p>
                    </div>

                    <div className="feature">
                        <div className="icon mb-4">
                            <img
                                src={bag}
                                alt="Easy to Book"
                                className="img-fluid"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">Easy to Book</h3>
                        <p className="text-base">
                            Our user-friendly booking system allows you to
                            easily browse and select from a range of travel
                            packages. Experience a hassle-free booking process
                            with just a few clicks.
                        </p>
                    </div>

                    <div className="feature">
                        <div className="icon mb-4">
                            <img
                                src={support}
                                alt="24/7 Customer Support"
                                className="img-fluid"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">
                            24/7 Customer Support
                        </h3>
                        <p className="text-base">
                            Our dedicated support team is available around the
                            clock to assist you with any inquiries or issues.
                            Whether you need help planning your itinerary or
                            have questions during your trip, we’re here for you.
                        </p>
                    </div>

                    <div className="feature">
                        <div className="icon mb-4">
                            <img
                                src={retu}
                                alt="Hassle-Free Returns"
                                className="img-fluid"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Hassle-Free Returns
                        </h3>
                        <p className="text-base">
                            If you encounter any issues with our packages or
                            services, our hassle-free return policy ensures that
                            you can easily resolve any concerns. Your
                            satisfaction is our priority.
                        </p>
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="p-6 md:p-8 lg:p-12">
                <div className="bg-white text-black rounded-lg shadow-lg p-6 relative overflow-hidden">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Booking Form
                    </h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
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
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Travel Date
                            </label>
                            <input
                                type="date"
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Number of Travelers
                            </label>
                            <input
                                type="number"
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]"
                            />
                        </div>

                        {/* Select Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Preferred Vehicle
                            </label>
                            <select
                                className="p-3 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E69737]">
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
