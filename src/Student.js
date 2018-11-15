import React from 'react';
import Tests from './Tests'
import Tag from './Tag'



class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand:true,
    }
  }



  render() {
    const grades = this.props.student.grades;
    const numbers = grades.map(Number);

    let sum;  let average = 0;
    if(numbers.length > 0){
      sum = numbers.reduce(function(a,b) {
        return a + b;
      })
      average = sum/numbers.length;
    }

    return (






            <div className='studentInfo'>



            <button onClick={() =>
                    this.setState({ expand: !this.state.expand })}>
                    {this.state.expand
                      ? <i className="fas fa-plus"></i>
                      : <i className="fas fa-minus"></i>
                    }
                    </button>


              <div className= 'info'>
                <img src={`${this.props.student.pic}`} alt=""/>

              <div className = 'details'>
                <h2>{this.props.student.firstName.toUpperCase()} {this.props.student.lastName.toUpperCase()}</h2>
                <p>Email: {this.props.student.email}</p>
                <p>Company: {this.props.student.company}</p>
                <p>Skill: {this.props.student.skill}</p>
                <p>Average: {average}% </p>
              </div>
                  <div className='grades'>
                  {grades.map((num, key) => {
                    return <Tests num={num} clicked={this.state.expand} testNumber={key + 1 } key={key}/>
                  })}

                  </div>
                  <Tag tagValue={this.props.tagValue} students={this.props.studentsArray}/>




              </div>

            </div>



    )
  }
}

export default Student
