"use client"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { useRouter } from "next/navigation"

const SignIn = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				console.log(userCredential)
				router.push("/")
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className="flex flex-grow items-center justify-center">
			<div className="bg-orange-300 p-10 rounded-lg shadow-xl w-96">
				<h1 className="text-orange-900 text-3xl mb-5">Sign In</h1>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full p-3 mb-4 bg-white rounded outline-none"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full p-3 mb-4 bg-white rounded outline-none"
				/>
				<button
					onClick={handleSignIn}
					className="bg-orange-700 w-full text-white rounded p-3 hover:opacity-90"
				>
					Login
				</button>
			</div>
		</div>
	)
}

export default SignIn
