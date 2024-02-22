// async function example() {
//   try {
//     let content = await fetch(
//       "https://todearhemant.pythonanywhere.com/patient/api/patients/"
//     );
//     console.log(content);
//   } catch (e) {
//     console.log("error ayi hai");
//   }
// }

// example();

// Fetch Data
async function fetchData() {
  try {
    const response = await fetch(
      "https://todearhemant.pythonanywhere.com/patient/api/patients/"
    );
    const data = await response.json();

    let result = "";
    data.forEach((patient) => {
      result += `<tr>
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.gender}</td>
      </tr>`;
    });

    document.getElementById("tbody").innerHTML = result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Post Data
async function postData() {
  try {
    const sendData = {
      name: "gaurav",
      age: "22",
      gender: "male",
    };

    const response = await fetch(
      "https://todearhemant.pythonanywhere.com/patient/api/patients/",
      {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Post Response:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

// Delete Data
async function deleteData() {
  try {
    const response = await fetch(
      "https://todearhemant.pythonanywhere.com/patient/api/patients/3346",
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("Data deleted successfully");
    } else {
      console.error("Failed to delete data");
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

// Call Functions
fetchData();
// postData();
deleteData();
