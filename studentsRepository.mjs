import students from './students.mjs'
async function getStudents() {
  // return students
  return (await (await fetch('http://localhost:4000/api/students', {mode: 'cors'})).json()).data
}
export { getStudents }