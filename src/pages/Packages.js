import React, {useEffect, useState} from 'react';
import PackageCard from './packegeCard';
import axios from "axios";

const PackagesPage = () => {

    const [data, setData] = useState([])

    const fetchPackages = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/package/all`);
            setData(response.data.data)
        } catch (e) {
            setData(e.message)
        }
    }

    useEffect(() => {
        fetchPackages()
    }, []);

    console.log(data)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((pack) => (
                    <PackageCard key={pack._id} pack={pack}/>
                ))}
            </div>
        </div>
    );
};

export default PackagesPage;
