import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, box }) => {
	return(
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id = 'inputimage' alt='' src= {imageUrl} width='500px' height='auto'/>
				{box.map((loc, index) => (
					<div key = {index} className='bounding-box' style= {{top: loc.topRow, right: loc.rightCol, bottom: loc.bottomRow, left: loc.leftCol}}></div>
					))}
			</div>
		</div>
	);
}
export default FaceRecognition