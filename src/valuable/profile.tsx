import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [userData, setUserData] = useState<any>(null);
    useEffect(() => {
        // Fetch user data from Azure API
        // const fetchUserData = async () => {
        //   try {
        //     const response = await axios.get('YOUR_AZURE_API_ENDPOINT');
        //     setUserData(response.data);
        //   } catch (error) {
        //     console.error('Error fetching user data:', error);
        //   }
        // };
    
        // fetchUserData();
        const data=localStorage.getItem("token")
      }, []);
    return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Profile Page</h1>
      {userData && (
        <div>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  )
}

export default Profile;