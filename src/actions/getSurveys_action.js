import axios from 'axios';







export function getAllSurveys() {

  return  axios.get('http://localhost/SurveyAPI/api/v1/Surveys')

    }
