import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import useTopic from "../hooks/useTopic";
import Logout from "../components/Logout";
import BASE_URL from "../config/api";

const TopicPage = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate()
  const [openTopics, setOpenTopics] = useState({});

  const {
    showTopics,
    selectedTopic,
    handleUpdateTopic,
    handleDeleteTopic,
    handleFetchDescription
  } = useTopic(subjectId, chapterId);

  async function updateTopic(topic) {
    const newName = prompt(
      "Enter new topic name",
      topic.topicName
    );

    if (!newName) return;

    await handleUpdateTopic(
      topic._id,
      newName
    );
  }

  async function deleteTopic(topic) {
    const confirmDelete = window.confirm(
      `Delete "${topic.topicName}" ?`
    );

    if (!confirmDelete) return;

    await handleDeleteTopic(topic._id);
  }
  async function toggleDescription(topicId) {
  if (openTopics[topicId]) {
    setOpenTopics((prev) => {
      const updated = { ...prev };
      delete updated[topicId];
      return updated;
    });

    return;
  }

  const data = await handleFetchDescription(topicId);

  setOpenTopics((prev) => ({
    ...prev,
    [topicId]: data,
  }));
}

function renderValue(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value.toString();
  }

  if (Array.isArray(value)) {
    return (
      <ul className="list-disc pl-6 space-y-2">
        {value.map((item, index) => (
          <li key={index}>
            {renderValue(item)}
          </li>
        ))}
      </ul>
    );
  }

  if (typeof value === "object") {
    return (
      <div className="space-y-2">
        {Object.entries(value).map(([key, val]) => (
          <div key={key}>
            <span className="font-semibold capitalize">
              {key}:
            </span>{" "}
            {renderValue(val)}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function goBack(){
    navigate(-1);
  }

return (
  <div className="max-w-5xl mx-auto p-6">
   <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 w-full">
    <button
      onClick={goBack}
      className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      ← Back
    </button>
    <Logout />
   </div>
    
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
      Topics
    </h2>

    <div className="grid gap-4">
      {showTopics.map((topic) => (
        <div
          key={topic._id}
          className="bg-white border rounded-xl shadow-md p-5 hover:shadow-xl transition"
        >
          {/* Topic Header */}
          <div className="flex justify-between items-start gap-3 flex-wrap">
            <h3 className="text-lg md:text-xl font-semibold wrap-break-words">
              {topic.topicName}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-3 mt-4">
            <button
              onClick={() => updateTopic(topic)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTopic(topic)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>

          {/* View Description Button */}
          <button
            onClick={() =>
              toggleDescription(topic._id)
            }
            className="mt-4 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
          >
            View Description

            <span className="text-xl">
              {openTopics[topic._id]
                ? "▲"
                : "▼"}
            </span>
          </button>

          {/* Description Section */}
          {openTopics[topic._id] && (
  <div className="mt-6 bg-gray-50 rounded-xl p-3 md:p-5 border overflow-hidden">

    <h2 className="text-xl md:text-2xl font-bold mb-4 wrap-break-words">
      {openTopics[topic._id].topicName}
    </h2>

    {/* Image */}
    {openTopics[topic._id].imageUrl && (
      <img
        src={`${BASE_URL}/${openTopics[
          topic._id
        ].imageUrl.replace(/\\/g, "/")}`}
        alt={openTopics[topic._id].topicName}
        className="w-full max-h-100 object-cover rounded-lg mb-6"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    )}

    {/* Description */}
    {openTopics[topic._id].description && (
      <>
        <h3 className="text-xl font-bold text-blue-700 mb-2">
          Description
        </h3>

        <div className="mb-4">
          {openTopics[topic._id].description}
        </div>
      </>
    )}

    {/* AI Notes */}
    {openTopics[topic._id].aiNotes &&
      Object.entries(
        openTopics[topic._id].aiNotes
      ).map(([sectionName, sectionData]) => {

        if (
          sectionData === null ||
          sectionData === undefined ||
          (Array.isArray(sectionData) &&
            sectionData.length === 0)
        ) {
          return null;
        }

        return (
          <div
            key={sectionName}
            className="mt-6"
          >
            <h3 className="text-lg md:text-xl  font-bold text-blue-700 mb-3 capitalize wrap-break-word">
              {sectionName
                .replace(/([A-Z])/g, " $1")
                .trim()}
            </h3>

            {renderValue(sectionData)}
          </div>
        );
      })}
  </div>
          )}


        </div>
      ))}
    </div>
  </div>
)};

export default TopicPage;