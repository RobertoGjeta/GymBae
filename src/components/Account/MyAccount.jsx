import { Link, Routes, Route } from "react-router-dom"
import Profile from "./Profile"
import MyPlan from "./MyPlan"
import MySubscription from "./MySubscription"

const MyAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50 p-8">
      <h2 className="text-3xl font-extrabold text-rose-700 mb-8">My Account</h2>

      {/* Navigation buttons inside account page */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link
          to="profile"
          className="px-6 py-3 bg-white border border-rose-300 rounded-lg hover:bg-rose-100 text-rose-700 transition-all duration-200"
        >
          Profile
        </Link>
        <Link
          to="plan"
          className="px-6 py-3 bg-white border border-rose-300 rounded-lg hover:bg-rose-100 text-rose-700 transition-all duration-200"
        >
          My Plan
        </Link>
        <Link
          to="subscription"
          className="px-6 py-3 bg-white border border-rose-300 rounded-lg hover:bg-rose-100 text-rose-700 transition-all duration-200"
        >
          My Subscription
        </Link>
      </div>

      {/* Dynamic content (changes when user clicks the buttons above) */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 border border-rose-100">
        <Routes>
          <Route
            index
            element={
              <div className="text-center text-gray-600">
                <h3 className="text-2xl font-semibold text-rose-700 mb-3">
                  Welcome to your account 💪
                </h3>
                <p>Select one of the options above to view your details.</p>
              </div>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route path="plan" element={<MyPlan />} />
          <Route path="subscription" element={<MySubscription />} />
        </Routes>
      </div>
    </div>
  )
}

export default MyAccount
