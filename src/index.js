import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LaunchButton from './components/launch';
import {getAllSurveys} from './actions/getSurveys_action';
import SurveyList from './components/survey_list';
import SurveyDetail from './components/survey_details';
import SurveyVersionList from './components/survey_version_list';
// var test = getAllSurveys();
// test.then(function(res){
//  console.log(res.data);
// });

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			surveys : [],
			selectedSurvey:null ,
			surveyVersions : []
		};

 var test =getAllSurveys();
 test.then((result)=>{
 this.setState({
 	surveys : result.data,
 	selectedSurvey : result.data[0],
 	surveyVersions : result.data[0].SurveyVersions
 });
});



	}
		
  render() {
  	console.log(this.state);
  return (
    <div>
      <LaunchButton />
      <SurveyList 
      property1={this.state.surveys}
      property3={(clickedSurvey) => this.setState({
      	selectedSurvey : clickedSurvey,
      	surveyVersions : clickedSurvey.SurveyVersions
      })} />
	    <SurveyDetail property2 = {this.state.selectedSurvey}/>
   
   	<SurveyVersionList property1={this.state.surveyVersions}/>
   	</div>
    );
  }


}

ReactDOM.render(<App />,document.querySelector('.container'))
