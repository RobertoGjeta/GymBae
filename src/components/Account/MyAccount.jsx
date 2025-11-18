import { Link, Routes, Route, useLocation} from "react-router-dom"
import { UserCircleIcon, CreditCardIcon, DocumentCheckIcon } from "@heroicons/react/24/outline"
import Profile from "./Profile"
import MyPlan from "./MyPlan"
import MySubscription from "./MySubscription"

const MyAccount = () => {
  const location= useLocation()
  const isMainAccountPage = location.pathname === "/account"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50 p-8">
      {!location.pathname.startsWith("/account")&& (<h2 className="text-3xl font-extrabold text-rose-700 mb-8">My Account</h2>)}
      {/* welcome message */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 border border-rose-100 mb-10">
        <Routes>
          <Route index element={
            <div className="text-center text-gray-600">
              <h3 className="text-2xl font-semibold text-rose-700 mb-3">
                Welcome to your Fitness Calorie track account 💪
              </h3>
              <p>Select one of the options below to view your details.</p>
            </div>
          } />
          <Route path="profile" element={<Profile />} />
          <Route path="plan" element={<MyPlan />} />
          <Route path="subscription" element={<MySubscription />} />
        </Routes>
      </div>
      {/* buttons */}
      {isMainAccountPage && (
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="profile" className="flex items-center gap-2 px-6 py-3 bg-white border border-rose-300 rounded-lg hover:bg-rose-100
         text-rose-700 transition-all duration-200"><UserCircleIcon className='w-5 text-rose-700'/>Profile</Link>

        <Link to="plan" className="flex items-center gap-2 px-6 py-3 bg-white border border-rose-300 rounded-lg hover:bg-rose-100
         text-rose-700 transition-all duration-200"><DocumentCheckIcon className='w-5 text-rose-700'/>My Plan</Link>

        <Link to="subscription" className="flex items-center gap-2 px-6 py-3 bg-white border border-rose-300 rounded-lg hover:bg-rose-100
         text-rose-700 transition-all duration-200"><CreditCardIcon className='w-5 text-rose-700'/>My Subscription</Link>
      </div>
      )}
    </div>
  )
}

export default MyAccount
