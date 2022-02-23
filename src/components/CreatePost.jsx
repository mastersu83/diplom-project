import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostThunk,
  getFullPostThunk,
  patchPostThunk,
} from "../redux/actions/posts_action";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Preloader from "./popupPattern/Preloader";
import { useHistory } from "react-router-dom";

const schema = yup
  .object({
    title: yup
      .string()
      .min(3, "Минимум 3 символа")
      .required("Это обязательное поле"),
    description: yup
      .string()
      .min(3, "Минимум 3 символа")
      .required("Это обязательное поле"),
    text: yup
      .string()
      .required("Это обязательное поле")
      .min(3, "Минимум 3 символа"),
    // file: yup.required("Это обязательное поле"),
  })
  .required();

const CreatePost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (posts.editOrCreateFlag === "create") {
      dispatch(createPostThunk(data, posts.currentPage, posts.pageSize, null));
      history.push("/posts/" + posts.currentPostId);
    } else {
      dispatch(
        patchPostThunk(
          data,
          posts.currentPage,
          posts.pageSize,
          posts.currentPostId
        )
      );
      dispatch(getFullPostThunk(posts.currentPostId));
      history.push("/posts/" + posts.currentPostId);
    }
  };

  if (!posts.posts.length) {
    return <Preloader />;
  }

  return (
    <div className="create__post">
      <span>{errors.title?.message}</span>
      <input
        name="title"
        {...register("title")}
        defaultValue={
          posts.editOrCreateFlag === "edit"
            ? setValue("title", posts.editedPost.title)
            : setValue("title", "")
        }
        className="create__titleInput"
        placeholder="Введите заголовок..."
        type="text"
        // value={setValue("title", posts.editedPost.title)}
      />
      <div className="create__shortDesc">Короткое описание:</div>
      <textarea
        {...register("description")}
        className="create__shortInput"
        defaultValue={
          posts.editOrCreateFlag === "edit"
            ? setValue("description", posts.editedPost.description)
            : setValue("description", "")
        }
      />
      <div className="create__linkTitle">Ссылка на изображение:</div>
      <div className="create__link">
        <input
          id="file"
          {...register("file", { required: true })}
          className="create__linkInput"
          type="file"
        />
        {/*<button className="create__linkBtn">Загрузить</button>*/}
      </div>
      <div className="create__longDesc">Полное описание:</div>
      <textarea
        {...register("text")}
        className="create__longInput"
        defaultValue={
          posts.editOrCreateFlag === "edit"
            ? setValue("text", posts.editedPost.text)
            : setValue("text", "")
        }
        // value={posts.editedPost.text ? posts.editedPost.text : ""}
      />
      <div className="create__btn">
        <button onClick={handleSubmit(onSubmit)} className="yellow__button">
          {posts.editOrCreateFlag === "edit" ? "Сохранить" : "Опубликовать"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
