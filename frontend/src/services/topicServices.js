import BASE_URL from "../config/api";

export async function fetchTopic(subjectId, chapterId) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/api/fetchTopic/${subjectId}/${chapterId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function updateTopic(
  subjectId,
  chapterId,
  topicId,
  topicName
) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/api/updateTopic/${subjectId}/${chapterId}/${topicId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topicName,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function deleteTopic(
  subjectId,
  chapterId,
  topicId
) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/api/deleteTopic/${subjectId}/${chapterId}/${topicId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function fetchDescription(
  subjectId,
  chapterId,
  topicId
) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/api/fetchDescription/${subjectId}/${chapterId}/${topicId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}