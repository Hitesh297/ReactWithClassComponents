import React from 'react';

const SurveyVersionListItem = (props) => {
	return (
		<li  className='list-group-item list-group-item-info'>
		<div>
		 Version : {props.surveyVersion.Id}
		 </div>
		 </li>
		);
};

export default SurveyVersionListItem;