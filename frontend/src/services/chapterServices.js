import BASE_URL from "../config/api";

export async function fetchChapter(subjectId) {
    try{
        const token = localStorage.getItem("token")
        if (!subjectId) {
    throw new Error("subjectId is required");
}
    const response = await fetch(`${BASE_URL}/api/fetchChapters/${subjectId}`,
        {
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
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
      throw err;
    }
    
}

export async function updateChapter(subjectId, chapterId, chapterName) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(
            `${BASE_URL}/api/updateChapter/${subjectId}/${chapterId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chapterName
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function deleteChapter(subjectId, chapterId) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(
            `${BASE_URL}/api/deleteChapter/${subjectId}/${chapterId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}