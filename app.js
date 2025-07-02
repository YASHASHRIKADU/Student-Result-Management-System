
var students = [
    {
        name: 'Shubham K',
        rollNumber: 129,
        math: 98,
        eng: 85,
        mar: 89,
        sci: 90,
    },
    {
        name: 'PRATHAM R',
        rollNumber: 130,
        math: 89,
        eng: 95,
        mar: 79,
        sci: 83,
    },
    {
        name: 'Abhishek K',
        rollNumber: 113,
        math: 90,
        eng: 88,
        mar: 80,
        sci: 79,
    },
      {
        name: 'Kartik M',
        rollNumber: 115,
        math: 90,
        eng: 88,
        mar: 80,
        sci: 79,
    },
      {
        name: 'Uday B ',
        rollNumber: 119,
        math: 90,
        eng: 88,
        mar: 80,
        sci: 79,
    },
      {
        name: 'Akansha S',
        rollNumber: 118,
        math: 99,
        eng: 78,
        mar: 50,
        sci: 94,
    }
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
<tr>
<td>${[i + 1]}</td>
<td>${students[i].name}</td>
<td>${students[i].rollNumber}</td>
<td>${students[i].math}</td>
<td>${students[i].eng}</td>
<td>${students[i].mar}</td>
<td>${students[i].sci}</td>
<td>${students[i].math + students[i].eng + students[i].mar + students[i].sci}</td>
<td>${((students[i].math + students[i].eng + students[i].mar + students[i].sci ) * 100 / 400).toFixed(2)}%</td>
<td><input type="button" value="Delete" class="delBtn" onclick="deleteRow(this)"></td>
<tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value.toLowerCase() == students[i].name.toLowerCase()) {
            found = true;
            Swal.fire({
                // title: `Student Found!`,
                title: `Name: ${students[i].name}`,
                text: ` Maths: ${students[i].math} | English: ${students[i].eng} | Marathi: ${students[i].mar} | Science ${students[i].sci}} | Total: ${students[i].math + students[i].eng + students[i].urd + students[i].sci} | Percentage: ${((students[i].math + students[i].eng + students[i].mar + students[i].sci) * 100 / 400).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function newStudent() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Math">' +
        '<input id="swal-input4" class="swal2-input" placeholder="English">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Marathi">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Science">',
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const math = parseInt(document.getElementById('swal-input3').value);
        const eng = parseInt(document.getElementById('swal-input4').value);
        const mar = parseInt(document.getElementById('swal-input5').value);
        const sci = parseInt(document.getElementById('swal-input6').value);
  
        if (isNaN(math) || isNaN(eng) || isNaN(mar) || isNaN(sci)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for Math, English, Marathi, Science.',
          });
          return false; // Prevent closing the alert
        }
  
        return [name, rollNumber, math, eng, mar, sci];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          math: parseInt(formValues[2]),
          eng: parseInt(formValues[3]),
          mar: parseInt(formValues[4]),
          sci: parseInt(formValues[5]),
        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.math}</td>
            <td>${student.eng}</td>
            <td>${student.mar}</td>
            <td>${student.sci}</td>
            <td>${student.math + student.eng + student.mar + student.sci}</td>
            <td>${((student.math + student.eng + student.mar + student.sci) * 100 / 400).toFixed(2)}%</td>
            <td><input type="button" class="delBtn" value="Delete" onclick="deleteRow(this)"></td>
          </tr>
        `;
      }
    });
  }

  // Delete Function
function deleteRow(r) {
  if (confirm('ARE YOU SURE TO DELETE THIS RECORD ?')) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}}