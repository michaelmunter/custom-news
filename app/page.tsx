"use client"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
	inputTitle: string
	inputArticle: string
}

const Home = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<main className="flex flex-col items-center p-10">
			{/* INPUT ARTICLE  */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center rounded-sm justify-center w-full md:w-[40rem] h-full p-6"
			>
				<h1 className="text-3xl font-bold text-neutral-900 mb-3">
					Enter Article
				</h1>
				<input
					className=" bg-white border-neutral-200 border drop-shadow-sm  rounded-sm  w-full py-1 px-3 "
					placeholder="Enter Title"
					{...register("inputTitle", { required: true })}
				/>
				{errors.inputTitle && (
					<span className="text-red-500 text-sm mr-auto px-3 pt-1">
						This field is required
					</span>
				)}
				<textarea
					className="border-solid bg-white drop-shadow-sm border-neutral-200 border rounded-sm  w-full py-1 px-3 min-h-[20rem] mt-2"
					placeholder="Enter Article"
					{...register("inputArticle", { required: true })}
				/>
				{errors.inputArticle && (
					<span className="text-red-500 text-sm mr-auto px-3 pt-1">
						This field is required
					</span>
				)}

				<input
					className="bg-orange-600 text-white rounded-md py-2 px-8 hover:opacity-90 hover:cursor-pointer mt-4"
					type="submit"
					value="SUBMIT"
				/>
			</form>
		</main>
	)
}
export default Home
