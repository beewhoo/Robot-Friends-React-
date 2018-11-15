import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Student from './Student';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [],
      searchValue: '',
      tags: ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.changeTag = this.changeTag.bind(this);
  }

changeTag(tags){
  this.setState({
    tags: tags
  })
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


  handleChange(e){
    this.setState({searchValue: e.target.value})
  }




    render() {
      let students = this.state.students.filter((student) => {
        return student.firstName.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1|| student.lastName.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1 ;
      });

      return (

            <div className='wrapper'>
                <h2 className = 'title'> ROBOT STUDENTS </h2>
             <input type="text" placeholder="search by name" onChange={this.handleChange}/>


                {students.map((student, key) => {
                  return <Student student={student} key={student.id} />
                })}

          </div>
      )
    }
}

export default App
