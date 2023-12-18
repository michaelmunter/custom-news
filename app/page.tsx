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
		<main className="flex flex-col min-h-screen items-center p-10 bg-neutral-50">
			{/* INPUT ARTICLE  */}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-neutral-100 flex flex-col drop-shadow-md items-center rounded-sm justify-center w-full md:w-[40rem] h-full p-6 space-y-4"
			>
				<h1 className="text-3xl font-bold text-neutral-600 ">
					Repodlic Creator
				</h1>
				<input
					className=" bg-neutral-50 font-bold border-neutral-200 border drop-shadow-sm  rounded-sm  w-full py-1 px-3"
					placeholder="Enter Title"
					{...register("inputTitle", { required: true })}
				/>
				{errors.inputTitle && <span>This field is required</span>}
				<textarea
					className="inline-block align-text-top border-solid bg-neutral-50 drop-shadow-sm border-neutral-200 border rounded-md  w-full py-1 px-3 min-h-[20rem]"
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
