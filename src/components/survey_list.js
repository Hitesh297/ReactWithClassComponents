import React from 'react';
import SurveyListItem from './survey_list_item';

const SurveyList = (props) => {
const surveyItems = props.property1.map((survey)=>{
return( 
<SurveyListItem 
onSurveySelect = {props.property3}
key={survey.Id} 
survey={survey}
/>);

});
	return (
		<ul className = "col-md-4 list-group">
		{surveyItems}
		</ul>
	);
};

export default SurveyList;