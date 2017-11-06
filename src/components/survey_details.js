import React from 'react';

const SurveyDetail = (props) => {

if(!props.property2) {
	return <div> Loading..</div>;
}

return(

<div className="panel panel-primary">
  <div className="panel-heading">
  {props.property2.Description}
  </div>
</div>
);

};

export default SurveyDetail;
