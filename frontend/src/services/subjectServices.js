
import BASE_URL from "../config/api";

export async function createNotes(formData) {
const token = localStorage.getItem("token");

const response = await fetch(`${BASE_URL}/api/makeNotes`, {
method: "POST",
headers: {
Authorization: `Bearer ${token}`,
},
body: formData,
});

return await response.json();
}

export async function fetchSubject() {
const token = localStorage.getItem("token");

const response = await fetch(`${BASE_URL}/api/fetchSubject`, {
method: "GET",
headers: {
Authorization: `Bearer ${token}`,
},
});

return await response.json();
}

export async function deleteSubject(subjectId) {
    try{
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/api/deleteSubject/${subjectId}`,
            {
                method: "DELETE",
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            }
        )
        const data = await response.json()
        if (!response.ok) {
      throw new Error(data.message);
    }

    return data;

    }catch(err){
        alert("Something went wrong . Please try after some time ")
      console.log(err)
      console.log(err.message)
    }
}

export async function updateSubject(subjectId, subjectName) {
    try{
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/api/updateSubject/${subjectId}`,
            {
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                     subject: subjectName,
                })
            }
        )

        const data = await response.json()
        if (!response.ok) {
      throw new Error(data.message);
    }

    return data;


    }catch(err){
        alert("Something went wrong . Please try after some time ")
      console.log(err)
      console.log(err.message)
    }
}
