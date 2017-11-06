import React from 'react';

const VideoListItem = (props) => {
	return (
		<li onClick= {() => props.onSurveySelect(props.survey)} className='list-group-item list-group-item-success'>
		<div>
		 {props.survey.Description}
		 </div>
		 </li>
		);
};

export default VideoListItem;