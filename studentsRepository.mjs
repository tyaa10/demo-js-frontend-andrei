import students from './students.mjs'
async function getStudents() {
// function getStudents() {
  // return students
  return (await (await fetch('http://localhost:4000/api/students', {mode: 'cors'})).json()).data
  // return fetch('http://localhost:4000/api/students', {mode: 'cors'})
}
export { getStudents }