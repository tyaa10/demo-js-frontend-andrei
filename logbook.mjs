import { getStudents, addStudent } from './studentsRepository.mjs'

const addFormSidebar = document.getElementById('addFormSidebar')
const openAddFormButton = document.getElementById('openAddFormButton')
const addButton = document.getElementById('addStudentButton')

addFormSidebar.addEventListener('click', e => e.stopPropagation())

openAddFormButton.addEventListener('click', e => {
  e.stopPropagation()
  console.log(addFormSidebar.style.margin)
  if (addFormSidebar.style.margin !== '0px') {
    addFormSidebar.style.margin = 0
  } else {
    addFormSidebar.style.margin = '-320px'
  }
})

document.addEventListener('click', e => {
  if (e.target.id !== 'openAddFormButton') {
    addFormSidebar.style.margin = '-320px'
  }
  // console.log(e.target.id)
})

addButton.addEventListener('click', async e => {
  e.preventDefault()
  const newStudent = {
    "name": nameInput.value,
    "age": ageInput.value,
    "avgScore": 5,
    "email": "test@test.com"
  }
  if(await addStudent(newStudent)) {
    const students = await getStudents()
    showStudents(students)
  }
})

function showStudents(students) {
  let studentCardsString = ''
  for (let i = 0; i < students.length; i++) {
      // console.log(students[i])
      const studentCard = `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3"> 
                            <div class="card">
                              <div class="card-body">
                                <h5 class="card-title">${students[i].name}</h5>
                                <p class="card-text">
                                  <div>
                                    <strong>Age: </strong><span>${students[i].age}</span>
                                  </div>
                                  <div>
                                    <strong>Score: </strong><span>${students[i].avgScore}</span>
                                  </div>
                                  <div>
                                    <strong>E-mail: </strong><span>${students[i].email}</span>
                                  </div>
                                </p>
                                <a href="#" class="btn btn-primary">Edit</a>
                                <a href="#" class="btn btn-primary">Delete</a>
                              </div>
                            </div>
                          </div>`
      studentCardsString += studentCard
  }
  const studentsDiv = document.getElementById('students')
  studentsDiv.innerHTML = studentCardsString
}

const students = await getStudents()
showStudents(students)

// getStudents().then(response => response.json()).then(responseBody => showStudents(responseBody.data))