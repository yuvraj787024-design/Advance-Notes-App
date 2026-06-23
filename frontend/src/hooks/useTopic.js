import { useEffect, useState } from "react";

import {
  fetchTopic,
  updateTopic,
  deleteTopic,
  fetchDescription
} from "../services/topicServices";

export default function useTopic(
  subjectId,
  chapterId
) {
  const [showTopics, setShowTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    if (subjectId && chapterId) {
      loadTopics();
    }
  }, [subjectId, chapterId]);

  async function loadTopics() {
    try {
      const data = await fetchTopic(
        subjectId,
        chapterId
      );
     

      setShowTopics(data.topics || []);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateTopic(
    topicId,
    topicName
  ) {
    try {
      await updateTopic(
        subjectId,
        chapterId,
        topicId,
        topicName
      );

      await loadTopics();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteTopic(
    topicId
  ) {
    try {
      await deleteTopic(
        subjectId,
        chapterId,
        topicId
      );

      await loadTopics();
    } catch (err) {
      console.log(err);
    }
  }

async function handleFetchDescription(
  topicId
) {
  try {
    const data = await fetchDescription(
      subjectId,
      chapterId,
      topicId
    );

    return data.topic;
  } catch (err) {
    console.log(err);
  }
}

  return {
    showTopics,
    selectedTopic,
    handleUpdateTopic,
    handleDeleteTopic,
    handleFetchDescription
  };
}