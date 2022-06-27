import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../postsSlice";
import { selectAllUsers } from "../../users/usersSlice";

import "./style.css";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (myEvent) => setTitle(myEvent.target.value);
  const onContentChanged = (myEvent) => setContent(myEvent.target.value);
  const onAuthorChanged = (myEvent) => setUserId(myEvent.target.value);
  const onSelectedImageChanged = (myEvent) =>
    setSelectedImage(myEvent.target.files[0]);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(selectedImage, title, content, userId));

      setUserId("");
      setTitle("");
      setContent("");
      setSelectedImage(null);
    }
  };

  const canSave =
    Boolean(userId) &&
    Boolean(title) &&
    Boolean(content) &&
    Boolean(selectedImage);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Share a thought!</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTtile"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor"> Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent"> Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label className="labelPostImage" htmlFor="postImage">
          Select image
        </label>
        <input
          className="inputPostForm"
          id="postImage"
          type="file"
          accept="image/*"
          name="myImage"
          onChange={onSelectedImageChanged}
        />
        {selectedImage && (
          <div className="selectedImageContainer">
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
          </div>
        )}
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
