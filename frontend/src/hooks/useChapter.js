import { useEffect, useState } from "react";

import { fetchChapter , updateChapter, deleteChapter} from "../services/chapterServices";

export default  function useChapter(subjectId) {
    const [showChapter, setShowChapter] = useState([])

    useEffect(()=>{
        if(subjectId){
        loadChapter();
    }


    }, [subjectId])

    async function loadChapter() {
        try{
            const data = await fetchChapter(subjectId)
            
            setShowChapter(data.chapters || [])

        }catch(err){
            console.log(err)
        }
    }

    async function handleUpdateChapter(chapterId, chapterName) {
    try {
        await updateChapter(subjectId, chapterId, chapterName);
        await loadChapter();
    } catch (err) {
        console.log(err);
    }
    }

    async function handleDeleteChapter(chapterId) {
    try {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this chapter?"
        );

        if (!confirmDelete) return;

        await deleteChapter(subjectId, chapterId);
        await loadChapter();
    } catch (err) {
        console.log(err);
    }
    }

    return{
        showChapter,
        loadChapter,
        handleUpdateChapter,
        handleDeleteChapter
    }
}