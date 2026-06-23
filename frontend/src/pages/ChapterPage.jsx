import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import useChapter from "../hooks/useChapter";
import Logout from "../components/Logout";

const ChapterPage = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  const {
    showChapter,
    handleUpdateChapter,
    handleDeleteChapter,
  } = useChapter(subjectId);

  async function updateChapter(chapter) {
    try {
      const newName = prompt(
        "Enter new chapter name",
        chapter.chapterName
      );

      if (!newName?.trim()) return;

      await handleUpdateChapter(
        chapter._id,
        newName.trim()
      );
    } catch (err) {
      console.log(err);
      alert("Failed to update chapter");
    }
  }

  async function deleteChapter(chapter) {
    try {
      const confirmDelete = window.confirm(
        `Delete "${chapter.chapterName}" ?`
      );

      if (!confirmDelete) return;

      await handleDeleteChapter(chapter._id);
    } catch (err) {
      console.log(err);
      alert("Failed to delete chapter");
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">

      {/* Header Buttons */}
      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() => navigate(-1)}
          className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
            shadow-md
            transition
          "
        >
          ← Back
        </button>

        <Logout />
      </div>

      {/* Page Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-blue-700">
        Chapters
      </h2>

      {/* Empty State */}
      {showChapter.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No chapters found.
        </div>
      )}

      {/* Chapter Cards */}
      <div className="grid gap-5">

        {showChapter.map((chapter, index) => (
          <div
            key={chapter._id}
            className="
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              p-5
            "
          >

            {/* Top Row */}
            <div className="flex justify-between items-start">

              <div className="flex items-center gap-3">

                <span className="text-3xl">
                  📖
                </span>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {chapter.chapterName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Chapter #{index + 1}
                  </p>
                </div>

              </div>

              <button
                onClick={() =>
                  navigate(
                    `/topic/${subjectId}/${chapter._id}`
                  )
                }
                className="
                  text-3xl
                  text-blue-600
                  hover:translate-x-1
                  transition
                "
                title="View Topics"
              >
                ➜
              </button>

            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-gray-600 text-sm md:text-base">
                Click the arrow to view all topics inside this chapter.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-5">

              <button
                onClick={() => updateChapter(chapter)}
                className="
                  bg-yellow-500
                  hover:bg-yellow-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  transition
                "
              >
                Edit
              </button>

              <button
                onClick={() => deleteChapter(chapter)}
                className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  transition
                "
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ChapterPage;