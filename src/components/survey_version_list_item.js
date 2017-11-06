import React from 'react';

const SurveyVersionListItem = (props) => {
	return (
		<li onClick= {() => props.onSurveySelect(props.surveyVersion)} className='list-group-item list-group-item-info'>
		<div>
		 Version : {props.surveyVersion.Id}
		 </div>
		 </li>
		);
};

export default SurveyVersionListItem;