import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
    </div>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
 //createCourse: PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
