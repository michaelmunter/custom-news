"use client"
import React from "react"
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { signOut } from "firebase/auth"

export default function NavBar() {
	// AUTHENTICATION
	const [user] = useAuthState(auth)
	console.log({ user })

	return (
		<div className="text-neutral-800 flex flex-row justify-between items-center bg-neutral-100 drop-shadow-sm py-3 px-4 ">
			<div>
				<Link href="/" className=" text-xl text-orange-600 font-bold">
					Repodlic
				</Link>
			</div>
			<div className="text-sm">
				{user ? (
					<div className="text-sm flex flex-row space-x-5 items-center">
						<Link className="" href="/profile">
							{user.email}
						</Link>
						<button
							className="bg-neutral-500  text-white rounded-lg px-3 py-2 text-xs drop-shadow-md hover:opacity-90 hover:cursor-pointer"
							onClick={() => {
								signOut(auth)
								sessionStorage.removeItem("user")
							}}
						>
							Log out
						</button>
					</div>
				) : (
					<div className="text-sm flex flex-row space-x-5 items-center">
						<Link className="" href="/sign-up">
							Sign Up
						</Link>

						<Link className="" href="/sign-in">
							Login
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}
