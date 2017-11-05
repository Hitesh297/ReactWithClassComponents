import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LaunchButton from './components/launch';
import {getAllSurveys} from './actions/getSurveys_action';
import SurveyList from './components/survey_list';

// var test = getAllSurveys();
// test.then(function(res){
//  console.log(res.data);
// });

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {surveys : [] };

 var test =getAllSurveys();
 test.then((result)=>{
 this.setState({surveys : result.data });
});



	}
		
  render() {
  	console.log(this.state);
  return (
    <div>
      <LaunchButton />
      <SurveyList property1={this.state.surveys} />
   </div>
    );
  }


}

ReactDOM.render(<App />,document.querySelector('.container'))
