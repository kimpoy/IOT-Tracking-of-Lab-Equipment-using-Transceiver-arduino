var NameV, StudentIDV, SubjectV, InstructorV;

function readFom() {
  NameV = document.getElementById("name").value;
  StudentIDV = document.getElementById("student-id").value;
  SubjectV = document.getElementById("subject").value;
  InstructorV = document.getElementById("instructor").value;
  itemV = document.getElementById("item").value;
  qrcodeV = document.getElementById("qrcode").value;
}

document.getElementById("insert").onclick = function () {
  console.log("yes");
  readFom();
  const start = Date.now();
  let a = start;

  if (!qrcodeV) {
    alert("ScanQR code");
  } else {
    firebase
      .database()
      .ref("student/" + a)
      .set({
        Name: NameV,
        StudentID: StudentIDV,
        Subject: SubjectV,
        Instructor: InstructorV,
        Item: itemV,
        QRCODe: qrcodeV,
      });
    alert("Data Inserted");
    document.getElementById("name").value = "";
    document.getElementById("student-id").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("item").value = "";
    document.getElementById("qrcode").value = "";
  }
};

/* document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
 */
