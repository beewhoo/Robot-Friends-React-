import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Student from './Student';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [],
      value: '',
      tagSearchValue: '',
      expand: true
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
      let filteredName = this.state.students.filter((student) => {
        return student.firstName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 || student.lastName.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
      });



      return (
        <div className='page'>
            <div className='wrapper'>
                {filteredName.map((student, key) => {
                  return <Student student={student} key={student.id} expand={this.changeExpand} tagValue={this.state.tagSearchValue} studentsArray={this.state.students} />
                })}
          </div>
        </div>
      )
    }
}

export default App
