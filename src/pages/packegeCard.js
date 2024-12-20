import React from "react"
import { Link } from "react-router-dom"
import Image from "../images/gangtok.jpeg"

const PackageCard = ({ pack, showBuyNow }) => {
    return (
        <div className="card max-w-xs border border-gray-200 rounded-lg shadow-md p-4 mb-6 bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
                src={Image}
                alt={pack.title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{pack.title}</h3>
            <p className="text-gray-700 mb-4">
                {pack.description.substring(0, 200) + " ..."}
            </p>
            <div className="bottom-button-container">
                <Link to={`/package/${pack.slug}`} state={{ pack }}>
                    <button className="bg-[#3b5d50] text-white px-4 py-2 rounded-lg hover:bg-[#3b5d50] transition-colors">
                        More Details
                    </button>
                </Link>

                {showBuyNow && (
                    <Link to={`/booking/${pack.slug}`}>
                        <button className="bg-[#3b5d50] text-white px-4 py-2 rounded-lg hover:bg-[#3b5d50] transition-colors">
                            Buy Now
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default PackageCard
