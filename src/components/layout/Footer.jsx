import { Link } from 'react-router-dom';

import { TbBrandDiscord } from 'react-icons/tb';

function Footer() {
	return (
		<>
			<footer className='footer footer-center p-10 bg-base-200 text-base-content border-base-300 rounded'>
				<div className='flex-1 px-2 mx-2'>
					<div className='relative flex h-12 items-center justify-between'>
						<p className='relative text-base-content'>Follow us on</p>

						<Link to='/' className='btn btn-sm rounded-btn '>
							<div className='fa-bilibili'></div>Bilibili
						</Link>
						<Link to='/porfolio' className='btn btn-sm rounded-btn'>
							<div className='fa-kook'></div>KOOK
						</Link>
						<Link to='/resources' className='btn btn-sm rounded-btn '>
							<TbBrandDiscord className='h-5 w-5' />
							Github
						</Link>
					</div>
				</div>
			</footer>

			<footer className='footer footer-center border-t-2 border-gray-400 px-10 pt-7 pb-5 bg-base-200 text-base-content'>
				<aside>
					<p className='pb-3'>
						Copyright © 2023 - All right reserved by Engineerdami
					</p>
					<p>
						<strong>
							Thie site is specified for website deployment and fully
							customization as self-learning purposes only.
						</strong>
					</p>
				</aside>
			</footer>
		</>
	);
}

export default Footer;
