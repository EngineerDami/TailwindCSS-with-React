import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Porfolio from './pages/Porfolio';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
	return (
		<Router>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />
				<main className='container mx-auto px-3 py-12 mt-12'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/portfolio' element={<Porfolio />} />
						<Route path='/resources' element={<Resources />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
			</div>

			<Footer />
		</Router>
	);
}

export default App;
