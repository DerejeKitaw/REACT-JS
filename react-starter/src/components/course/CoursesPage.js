import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course})
  }
  onClickSave(){
    // alert(`Save ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  render() {

    return (
      <div>
        <h1>Courses</h1>
        <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title}
        />
        <input type="submit"
               value="Save"
               onClick={this.onClickSave}/>
    </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps)(CoursesPage);
