import { useState } from "react";
import { SidebarLink } from "./components";

export const Sidebar = () => {
	const [linkSearchText, setLinkSearchText] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLinkSearchText(e.target.value);
	};

	return (
		<div className='flex flex-col'>
			<div className='bg-primary h-screen text-ternary  w-72'>
				<h1 className='text-gray-200 text-3xl p-2'>algorithms</h1>
				<input type='text' placeholder='search..' value={linkSearchText} onChange={handleInputChange} className='bg-gray-200 text-gray-500 p-2 rounded-lg w-11/12 m-2 focus:outline-none' />
				<ul className='pt-2'>
					<SidebarLink route='/' text='home' />
					<SidebarLink route='/fizz-buzz' text='fizz-buzz' />
				</ul>
			</div>
		</div>
	);
};
