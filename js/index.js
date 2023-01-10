let btnSubmit = document.getElementById("btnSubmit");
/* function inforSv() {
  let studentId = document.getElementById("studentId").value;
  let studentName = document.getElementById("studentName").value;
  let studentAge = document.getElementById("studentAge").value;
  let sex = document.getElementById("sex").value;
  let studentPhone = document.getElementById("studentPhone").value;
  let studentAddress = document.getElementById("studentAddress").value;
  return studentAddress, studentPhone, sex, studentAge, studentName, studentId;
} */
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let studentId = document.getElementById("studentId").value;
  let dataSv = JSON.parse(localStorage.getItem("dataSv"));
  let exist = false;
  if (dataSv != null) {
    for (const data of dataSv) {
      {
        if (data.studentId == studentId) {
          exist = true;
          break;
        }
      }
    }
  }
  if (exist) {
    //em chưa định nghĩa hàm editData
    updateData();
  } else {
    addData();
  }
});

function addData() {
  let dataSv = JSON.parse(localStorage.getItem("dataSv"));
  if (dataSv == null) {
    dataSv = [];
  }
  let studentId = document.getElementById("studentId").value;
  let studentName = document.getElementById("studentName").value;
  let studentAge = document.getElementById("studentAge").value;
  let sex = document.getElementById("sex").value;
  let studentPhone = document.getElementById("studentPhone").value;
  let studentAddress = document.getElementById("studentAddress").value;
  let dataSvNew = {
    studentId: studentId,
    studentName: studentName,
    studentAge: studentAge,
    sex: sex,
    studentPhone: studentPhone,
    studentAddress: studentAddress,
  };
  dataSv.push(dataSvNew);
  console.log("DS sinh vien", dataSv);
  localStorage.setItem("dataSv", JSON.stringify(dataSv));
  //Da them duoc sinh vien vao localstorage roi nhe
  readDataSv();
}
function readDataSv() {
  let dataSv = JSON.parse(localStorage.getItem("dataSv"));
  //   Du lieu sinh vien trong localstorage cau truc khong nhat quan
  if (dataSv == null) {
    dataSv = [];
  }
  let tableBody = document.getElementById("tableBody");
  //   O day phai khoi tao tableBody.innerHTML
  tableBody.innerHTML = "";
  dataSv.forEach((data, index) => {
    tableBody.innerHTML += `
    <tr>
          <td>${index + 1}</td>
          <td>${data.studentId}</td>
          <td>${data.studentName}</td>
          <td>${data.studentAge}</td>
          <td>${data.sex}</td>
          <td>${data.studentPhone}</td>
          <td>${data.studentAddress}</td>
          <td>
            <button class="btnEdit" onclick="editData('${
              data.studentId
            }')">Edit</button>
            <button class="btnDelete" onclick="deleteData('${
              data.studentId
            }')">Delete</button>
                    </td>
        </tr>
    `;
  });
}
readDataSv();
function editData(studentId) {
  let dataSv = JSON.parse(localStorage.getItem("dataSv"));
  let editData = dataSv.filter((data) => {
    if (data.studentId == studentId) {
      return data;
    }
  });
  document.getElementById("studentId").value = editData[0].studentId;
  document.getElementById("studentName").value = editData[0].studentName;
  document.getElementById("studentAge").value = editData[0].studentAge;
  document.getElementById("sex").value = editData[0].sex;
  document.getElementById("studentPhone").value = editData[0].studentPhone;
  document.getElementById("studentAddress").value = editData[0].studentAddress;
}
function updateData() {
  confirm("Bạn chắc chắn muốn sửa thông tin SV");
  if (confirm) {
    let dataSv = JSON.parse(localStorage.getItem("dataSv"));
    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("studentName").value;
    let studentAge = document.getElementById("studentAge").value;
    let sex = document.getElementById("sex").value;
    let studentPhone = document.getElementById("studentPhone").value;
    let studentAddress = document.getElementById("studentAddress").value;
    let dataUpdate = dataSv.map((data) => {
      if (data.studentId == studentId) {
        data.studentId = studentId;
        data.studentName = studentName;
        data.studentAge = studentAge;
        data.sex = sex;
        data.studentPhone = studentPhone;
        data.studentAddress = studentAddress;
      }
      return data;
    });
    localStorage.setItem("dataSv", JSON.stringify(dataUpdate));
  }
  readDataSv();
}
function deleteData() {
  let dataSv = JSON.parse(localStorage.getItem("dataSv"));
  for (i = 0; i <= dataSv.length - 1; i++) {
    console.log(i);
    console.log("studentid_____", studentId);
    console.log(dataSv);
    console.log(dataSv[i].studentId);
    if (dataSv[i].studentId == i) {
      dataSv.splice(i, 1);
      console.log("hehe");
      break;
    }
  }
  localStorage.setItem("dataSv", JSON.stringify(dataSv));
  readDataSv();
}
