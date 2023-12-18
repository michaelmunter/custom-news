"use client"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
	inputTitle: string
	inputArticle: string
}

export default function Home() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<main className="flex flex-col min-h-screen items-center p-10 bg-stone-100">
			{/* INPUT ARTICLE  */}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white flex flex-col items-center rounded-md justify-center w-full md:w-[40rem] h-full p-4 px-6 space-y-4"
			>
				<h1 className="text-3xl font-bold text-stone-700 ">
					Repodlic Creator
				</h1>
				<input
					className="border-solid  border-stone-200 border rounded-md  w-full py-1 px-3"
					placeholder="Enter Title"
					{...register("inputTitle", { required: true })}
				/>
				{errors.inputTitle && <span>This field is required</span>}
				<textarea
					className="inline-block align-text-top border-solid  border-stone-200 border rounded-md  w-full py-1 px-3 min-h-[20rem]"
					placeholder="Enter Article"
					{...register("inputArticle", { required: true })}
				/>
				{errors.inputArticle && <span>This field is required</span>}

				<input
					className="bg-cyan-600 text-white rounded-md py-2 px-8 hover:bg-cyan-500 hover:cursor-pointer"
					type="submit"
				/>
			</form>
		</main>
	)
}
