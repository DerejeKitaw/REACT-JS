import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  // a thunk always returns a function that accepts a dispatch
  return function(dispatch) {
    // body of thunk
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      // dispatch an action creator called loadCoursesSuccess
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
