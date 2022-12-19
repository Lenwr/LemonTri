import React from 'react';

import Wrapper from '../../hooks/Wrapper';

// video
import video from './../../assets/video/lemon-tri.mp4';

//style
import './virtualReality.css';

const VirtualReality = () => {
	return (
		<Wrapper>
			<div className={'center'}>
				<video className={'landscape'} width={'100%'} controls muted autoPlay preload="auto">
					<source src={video} type="video/mp4"/>
				</video>
			</div>
		</Wrapper>
	);
};

export default VirtualReality;
