import * as types from './actionTypes';

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}