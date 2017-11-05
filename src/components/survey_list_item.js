import React from 'react';

const VideoListItem = (props) => {
	return (
		<li className='list-group-item'>
		<div>
		 {props.survey.Description}
		 </div>
		 </li>
		);
};

export default VideoListItem;