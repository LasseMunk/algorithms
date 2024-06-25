import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Sidebar, FizzBuzz, Error404 } from "./pages";

function App() {
	return (
		<BrowserRouter basename='/algorithms'>
			<div className='flex h-screen'>
				<div>
					<Sidebar />
				</div>
				<div className='bg-gray-100 flex-1 p-4'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/fizz-buzz' element={<FizzBuzz />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
