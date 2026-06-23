import { useEffect, useState } from "react";
import { fetchSubject, deleteSubject, updateSubject } from "../services/subjectServices";

export default  function useSubject() {
    const [showSubjects, setShowSubjects] = useState([])

    useEffect(()=>{
  loadSubjects()
}, []);

async function loadSubjects() {
    try{
        const data = await fetchSubject()
        setShowSubjects(data.subjectList || [])

    }catch(err){
        alert(err.message)
    }
}

async function handelDeleteSubject(subjectId) {
    try{
        await deleteSubject(subjectId)
        await loadSubjects();

    }catch(err){
        alert("Something went wrong . Please try after some time ")
      console.log(err)
      console.log(err.message)
    }
    
}

async function handelUpdateSubject(subjectId, newSubjectName) {
    try{
        await updateSubject(subjectId, newSubjectName)
        await loadSubjects();

    }catch(err){
        alert("Something went wrong . Please try after some time ")
      console.log(err)
      console.log(err.message)
    }
}

return{
    showSubjects,
    loadSubjects,
    handelDeleteSubject,
    handelUpdateSubject
}
}







