import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Student from './Student';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: []

    }
  }

  componentDidMount() {
    axios.get(`https://www.hatchways.io/api/assessment/students`, {
    })
      .then(({ data }) => {
        this.setState({
          students: data.students
        });
      });
  }

    render() {
      const students = this.state.students

      return (
        <div className='page'>
            <div className='wrapper'>
                {students.map((student, key) => {
                  return <Student student={student} key={student.id} />
                })}
          </div>
        </div>
      )
    }
}

export default App
