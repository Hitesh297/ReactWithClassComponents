import React from 'react';
import SurveyVersionListItem from './survey_version_list_item';

const SurveyVersionList = (props) => {
	const surveyVersionItems = props.property1.map((surveyVersion)=>{
return( 
<SurveyVersionListItem 
key={surveyVersion.Id} 
surveyVersion={surveyVersion}
/>);

});
	return (
		<ul className = "col-md-4 list-group">
		{surveyVersionItems}
		</ul>
	);
};

export default SurveyVersionList;