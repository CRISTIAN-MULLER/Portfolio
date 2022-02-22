import React, { useState, useContext } from 'react'

import './Works.scss'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { UserDataContext } from '../../App'

function Works() {
	const { userRepositoriesData } = useContext(UserDataContext)
	const [currentSlide, setCurrentSlide] = useState(0)

	const handleClick = (way: string) => {
		way === 'left'
			? setCurrentSlide(
					currentSlide > 0 ? currentSlide - 1 : userRepositoriesData.length - 1,
			  )
			: setCurrentSlide(
					currentSlide < userRepositoriesData.length - 1 ? currentSlide + 1 : 0,
			  )
	}

	return (
		<div className='works' id='works'>
			<div
				className='slider'
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{userRepositoriesData.map((item) => (
					<div className='container' key={item.id} id={item.id}>
						<div className='item'>
							<div className='left'>
								<div className='leftContainer'>
									{/* <div className="imgContainer">
                    <img src={item.icon} alt="mobile" />
                  </div> */}
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</div>
							<div className='right'>
								<img src={item.imageURL} alt='' />
							</div>
						</div>
					</div>
				))}
			</div>
			<ArrowBackIos
				className='arrow left'
				onClick={() => handleClick('left')}
			/>
			<ArrowForwardIosIcon
				className='arrow right'
				onClick={() => handleClick('right')}
			/>
		</div>
	)
}

export default Works
