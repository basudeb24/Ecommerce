import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Profile() {
  const API_URI = '/api/v1/products'
  const [profile, setProfile] = useState([])
  const getProfiles = async () => {
    try {
      const fetchData = await axios.get(API_URI)
      setProfile(fetchData.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    window.addEventListener('load', getProfiles)
    return () => {
      window.removeEventListener('load', getProfiles)
    }
  }, [profile])
  console.log(profile)
  return (
    <div className="container mt-4">
        
      <h2 className="mb-4">React Axios HTTP GET Request Example</h2>
      <h4> profile </h4>
      {/* {profile.map((res) => {
        return (
          <li
            className="card p-3 mb-2 bg-secondary bg-gradient text-white"
            key={res._id}
          >
            <div className="card-body">
              <h5 className="card-title">{res.name}</h5>
              <p className="card-text">{res.description}</p>
            </div>
          </li>
        )
      })} */}
      
    </div>
  )
}