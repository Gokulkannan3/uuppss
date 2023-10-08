import React, { useEffect, useState } from "react";
import Navbar from '../Nav'
import './fetch.css'
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Fetch() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://172.16.9.238:8080/rfid/getall");
        const actualData = await response.json();
        setData(actualData);
      } catch (err) {
        console.log(err.message);
      }
    };

    // Fetch data initially
    fetchData();

    // Refresh the page every 30 seconds (adjust as needed)
    const refreshInterval = setInterval(() => {
      fetchData();
    }, 3000); // 30 seconds

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="overflow-x-auto mt-8 shadow-black">
        <table className="table table-zebra mx-auto w-1/2">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="text-center w-1/4">AWB</th>
              <th className="text-center w-1/4">Sender Data</th>
              <th className="text-center w-1/4">Origin Data</th>
              <th className="text-center w-1/4">Destination</th>
              <th className="text-center w-1/4">Tracking</th>
            </tr>
          </thead>
          <tbody className='tboby'>
            {data && data.map((item, index) => (
              <tr key={index}>
                <td className="text-center align-middle w-1/4">{item.awb}</td>
                <td className="text-center align-middle w-1/4">{item.sender_data}</td> 
                <td className="text-center align-middle w-1/4">{item.origin_data}</td>
                <td className="text-center align-middle w-1/4">{item.destination_data}</td>
                <td>
                  {/* Link to Shipping component with data */}
                  <Link
                    to={{
                      pathname: `/shipping/${item.awb}`,
                      state: {
                        awb: item.awb,
                        sender_data: item.sender_data,
                        origin_data: item.origin_data,
                        destination_data: item.destination_data,
                      },
                    }}
                  >
                    <button className="btn hover:bg-yellow-400 hover:text-black">
                      Track
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
    </div>
  );
}

export default Fetch;
