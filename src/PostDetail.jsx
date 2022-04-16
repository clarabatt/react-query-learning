import React from "react";
import { useQuery, useMutation } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  const { data, isError, error, isLoading } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );
  if (isLoading) return <p>Loading</p>;
  if (isError)
    return (
      <p>
        Error: <span>{error.toString()}</span>
      </p>
    );

  const deletePostMutation = useMutation((postId) => deletePost(postId));

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deletePostMutation.mutate(post.id)}>
        Delete
      </button>{" "}
      <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
