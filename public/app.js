document.getElementById('btn').addEventListener('click', () => {


    var getinp = document.getElementById('resultInp').value
    axios.get(`/marksheet/${getinp}`)
        .then((res) => {
            document.querySelector('.name').innerHTML = `Name: ${res.data.name}`
            document.querySelector('.rollno').innerHTML = `Rollno: ${res.data.rollno}`
            document.querySelector('.gpa').innerHTML = `GPA: ${res.data.gpa}`
            document.querySelector('.status').innerHTML = `Status: ${res.data.status}`

        })
       
})