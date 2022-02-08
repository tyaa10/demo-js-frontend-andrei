const arrayStudentData = [
    { "name": "mary", "age": 19, "avgscore": 10.5, "email": "mary@test.com", "id": 1 },
    { "name": "john", "age": 21, "avgscore": 10, "email": "john@test.com", "id": 2 },
    { "name": "max", "age": 22, "avgscore": 11.2, "email": "max@test.com", "id": 3 },
    { "name": "kristian", "age": 43, "avgscore": 11, "email": "kristian@test.com", "id": 4 },
    { "name": "katerina", "age": 23, "avgscore": 11.5, "email": "katerina@test.com", "id": 5 },
    { "name": "teresa", "age": 18, "avgscore": 11.1, "email": "teresa@test.com", "id": 6 },
    { "name": "mark", "age": 28, "avgscore": 9.8, "email": "mark@test.com", "id": 7 },
    { "name": "tatiana", "age": 39, "avgscore": 10.7, "email": "tatiana@test.com", "id": 8 },
    { "name": "markus", "age": 27, "avgscore": 10.3, "email": "markus@test.com", "id": 9 },
    { "name": "ralf", "age": 29, "avgscore": 10.7, "email": "ralf@test.com", "id": 10 },
    { "name": "natali", "age": 24, "avgscore": 10.9, "email": "natali@test.com", "id": 11 },
    { "name": "eva", "age": 22, "avgscore": 10, "email": "eva@test.com", "id": 12 }]

var arrayStudentDisplay = []

for (let i = 0; i < arrayStudentData.length; i++) {
    console.log(arrayStudentData[i])



    var a = "<div  class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3'>" +
        "<div class='card'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>" + arrayStudentData[i].name + "</h5>" +
        "<p class='card-text'>" +
        "<div>" +
        "<strong>Age: </strong><span>" + arrayStudentData[i].age + "</span>" +
        "</div>" +
        "<div>" +
        "<strong>" + " Score:" + "</strong><span>" + arrayStudentData[i].avgscore + "</span>" +
        "</div>" +
        "<div>" +
        "<strong>" + "E-mail:" + "</strong><span>" + arrayStudentData[i].email + "</span>" +
        "</div>" +
        "</p>" +
        "<a href='#' class='btn btn-primary'>" + "Edit" + "</a>" +
        "<a href='#' class='btn btn-primary'>" + "Delete" + "</a>" +
        "</div>" +
        "</div>" +
        "</div>"

    arrayStudentDisplay.push(a)
}
let div = document.createElement('div')


div.className = 'container row'
div.innerHTML = arrayStudentDisplay
document.body.append(div)

