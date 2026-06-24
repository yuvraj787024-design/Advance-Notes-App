import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../config/api'

import { createNotes } from '../services/subjectServices'
import { toTitleCase } from '../utilis/subjectUtilis'

import useSubject from '../hooks/useSubject'
import Logout from '../components/Lsogout'

const NotesPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [subject, setSubject] = useState('')
  const [chapter, setChapter] = useState('')
  const [topic, setTopic] = useState('')
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('')

  const {showSubjects, loadSubjects, handelDeleteSubject, handelUpdateSubject} = useSubject()

  async function getAiNotes(e) {
    if(!subject || !chapter || !topic ){
      alert("Please fill all required part")
      return
    }
    try{
      setLoading(true)
    
      const formData = new FormData();
      formData.append("subject", toTitleCase(subject));
      formData.append("chapter", toTitleCase(chapter));
      formData.append("topicName", toTitleCase(topic));
      formData.append("description", description);
      if (image) {
      formData.append("image", image);
    }


      

      const data = await createNotes(formData)
      await loadSubjects();

    setSubject("");
    setChapter("");
    setTopic("");
    setDescription("");
    setImage(null);

    }catch(err){
      alert("Something went wrong . Please try after some time ")
      console.log(err)
      console.log(err.message)
    }finally{
      setLoading(false)
    }
    
  }

  function openChapterPage(subjectId){
   navigate(`/mainNotes/${subjectId}`)
   console.log(subjectId)
 }

  return (    
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <div className="flex justify-end mb-4">
    <Logout />
  </div>
  <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
    AI Notes Generator
  </h2>

  <div className="space-y-4">
    <input
      type="text"
      placeholder="Enter your subject"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="text"
      placeholder="Enter your chapter name"
      value={chapter}
      onChange={(e) => setChapter(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="text"
      placeholder="Enter your topic name"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
      className="w-full border border-gray-300 rounded-lg p-3 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
    />

    <textarea
      placeholder="Write down full detailed description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      rows="5"
      className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      disabled={loading}
      onClick={getAiNotes}
      className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
      }`}
    >
      {loading ? "Please wait..." : "Create Notes"}
    </button>
  </div>

  {/* Subject List */}
  <div className="mt-8">
  <h3 className="text-xl font-semibold mb-4 text-center">
    Your Subjects
  </h3>

  {showSubjects.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {showSubjects.map((showSubject) => (
        <div
          key={showSubject._id}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
        >
          <h4 className="text-center font-semibold text-lg mb-4">
            {showSubject.subject}
          </h4>

          <div className="flex justify-center gap-2 flex-wrap">
  <button
    onClick={async () => {const newName = prompt("Enter new subject name",showSubject.subject);
    if (!newName) return;
    await handelUpdateSubject(
      showSubject._id,newName
    );
  }}

    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300"
  >
    Edit
  </button>

  <button
    onClick={() => openChapterPage(showSubject._id)}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
  >
    Open
  </button>

  <button
    onClick={() => handelDeleteSubject(showSubject._id)}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
  >
    Delete
  </button>
</div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">
      No subjects found
    </p>
  )}
</div>
</div>
  )
}

export default NotesPage