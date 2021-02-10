import {
  CLEAR_HOMEWORK,
  CREATE_HOMEWORK,
  FETCH_HOMEWORK,
  GRADE_HOMEWORK,
  SUBMIT_HOMEWORK,
} from './types'

import HomeworkService from '../services/homework'

export const createHomeworkPage = (
  courseTitle,
  title,
  description,
  files,
  openDate,
  closeDate,
  fullName,
  mode
) => (dispatch) => {
  return HomeworkService.createHomeworkPage(
    courseTitle,
    title,
    description,
    files,
    openDate,
    closeDate,
    fullName,
    mode
  ).then((data) => {
    dispatch({
      type: CREATE_HOMEWORK,
      payload: data,
    })
    return Promise.resolve()
  })
}

export const fetchHomeworkPage = (randomStr) => (dispatch) => {
  return HomeworkService.fetchHomeworkPage(randomStr).then((data) => {
    dispatch({
      type: FETCH_HOMEWORK,
    })
    return Promise.resolve()
  })
}

export const submitHomework = (
  fullName,
  answer,
  submitDate,
  grade,
  comments,
  hwPageID
) => (dispatch) => {
  return HomeworkService.submitHomework(
    fullName,
    answer,
    submitDate,
    grade,
    comments,
    hwPageID
  ).then((data) => {
    dispatch({
      type: SUBMIT_HOMEWORK,
    })
    return Promise.resolve()
  })
}
export const gradeHomework = (
  id,
  fullName,
  answer,
  submitDate,
  grade,
  comments,
  hwPageID
) => (dispatch) => {
  return HomeworkService.gradeHomework(
    id,
    fullName,
    answer,
    submitDate,
    grade,
    comments,
    hwPageID
  ).then((data) => {
    dispatch({
      type: GRADE_HOMEWORK,
    })
    return Promise.resolve()
  })
}

export const clearHomework = () => ({
  type: CLEAR_HOMEWORK,
})