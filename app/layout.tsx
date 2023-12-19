import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "./components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Repodlic",
	description: "Customize Your News",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={
					inter.className &&
					"flex flex-col min-h-screen bg-neutral-50"
				}
			>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
