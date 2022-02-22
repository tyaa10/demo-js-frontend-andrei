import students from './students.mjs'
async function getStudents() {
// function getStudents() {
  // return students
  return (await (await fetch('http://localhost:4000/api/students', {mode: 'cors'})).json()).data
  // return fetch('http://localhost:4000/api/students', {mode: 'cors'})
}
async function addStudent(newStudent) {
    const response = await fetch (
      'http://localhost:4000/api/students',
      {
        mode: 'cors',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
      }
    )
    return (response.status === 201)
  }
export { getStudents, addStudent }