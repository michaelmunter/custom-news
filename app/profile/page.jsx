"use client"
import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const Profile = () => {
	const [user] = useAuthState(auth)

	return (
		<div className="flex flex-grow items-center justify-center">
			<p className="text-orange-600 font-bold text-2xl">
				{user ? `Welcome, ${user.email}` : "You are not signed in"}
			</p>
		</div>
	)
}

export default Profile
