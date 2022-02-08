import { getStudents } from './studentsRepository.mjs'

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
                                    <strong>Score: </strong><span>${students[i].avgscore}</span>
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

const students = getStudents()
showStudents(students)