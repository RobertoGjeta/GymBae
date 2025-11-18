import React, { useState, useEffect } from "react"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
  })

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    const storedProfile = JSON.parse(localStorage.getItem("profileData"))

    if (storedProfile) {
      setProfile(storedProfile)
    } else if (storedUser) {
      setProfile((prev) => ({
        ...prev,
        fullName: storedUser.name || "",
        email: storedUser.email || "",
      }))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profile))
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8 border border-rose-100 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-rose-700 mb-6">Profile Details</h3>

      {/* view saved form */}
      {!isEditing && (
        <div>
          {/* personal info */}
          <h4 className="text-lg font-semibold text-rose-700 mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{profile.fullName || "Not set"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{profile.email || "Not set"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{profile.age || "Not set"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">{profile.gender || "Not set"}</p>
            </div>
          </div>

          {/* body info */}
          <h4 className="text-lg font-semibold text-rose-700 mb-4">Fitness Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-medium">{profile.height ? `${profile.height} cm` : "Not set"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Weight</p>
              <p className="font-medium">{profile.weight ? `${profile.weight} kg` : "Not set"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Goal</p>
              <p className="font-medium">{profile.goal || "Not set"}</p>
            </div>
          </div>

          {/* edit button */}
          <div className="flex justify-end">
            <button onClick={() => setIsEditing(true)} className="px-6 py-2 bg-rose-600 text-white 
            rounded-lg hover:bg-rose-700 transition-all"> Edit Profile</button>
          </div>
        </div>
      )}

      {/* edit form */}
      {isEditing && (
        <div>
          {/* personal info */}
          <h4 className="text-lg font-semibold text-rose-700 mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Age</label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Gender</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>

          {/* body info*/}
          <h4 className="text-lg font-semibold text-rose-700 mb-4">Fitness Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="text-sm text-gray-600">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={profile.height}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={profile.weight}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Goal</label>
              <input
                type="text"
                name="goal"
                value={profile.goal}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md border-rose-300 bg-white"
              />
            </div>
          </div>

          {/* buttons to save/cancel */}
          <div className="flex justify-end gap-3">
            <button onClick={() => setIsEditing(false)} className="px-6 py-2 bg-gray-300 text-gray-700 
            rounded-lg hover:bg-gray-400 transition-all">Cancel</button>

            <button onClick={handleSave} className="px-6 py-2 bg-rose-600 text-white rounded-lg
             hover:bg-rose-700 transition-all">Save Changes</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
