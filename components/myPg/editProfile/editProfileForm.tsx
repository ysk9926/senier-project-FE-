"use client";

import ErrorForm from "@/components/mainPg/Auth/Form/ErrorForm";
import { Avatar, Button } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { EditProfileMutation } from "@/documents/mutations/User/EditAccount";
import { MeQuery } from "@/documents/queries/me.query";

export default function EditProfileForm({
  avatar,
  userId,
  username,
  onClose,
}: {
  avatar: string;
  userId: string;
  username: string;
  onClose: () => void;
}) {
  // 입력 폼
  interface IEditProfile {
    avatar: FileList;
    username: string;
    userId: string;
    password: string;
    passwordCheck: string;
  }
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    watch,
  } = useForm<IEditProfile>({
    mode: "onChange",
    defaultValues: {
      userId: userId || "",
      username: username || "",
    },
  });

  // 비밀번호 일치 확인을 위한 password입력값 확인
  const watchPassword = watch("password", "");

  // submit
  const [editProfileMutation, { loading: editProfileLoading }] = useMutation(
    EditProfileMutation,
    {
      refetchQueries: [{ query: MeQuery }],
    }
  );
  const onSubmitValid: SubmitHandler<IEditProfile> = async (data) => {
    if (editProfileLoading) {
      return;
    }
    const { username, userId, password, avatar } = getValues();
    try {
      const result = await editProfileMutation({
        variables: {
          avatar: avatar[0],
          password,
          username,
          userId,
        },
      });
      onClose();
      console.log("프로필 수정 결과", result);
    } catch (error) {
      console.log("프로필 수정 에러", error);
    }
  };

  // 아바타 미리보기
  const [preAvatar, setPreAvatar] = useState();

  return (
    <form
      onSubmit={handleSubmit(onSubmitValid)}
      className=" flex flex-col justify-between items-center w-full"
    >
      <div className=" flex justify-between items-center w-full">
        <label>
          <Avatar
            name={username}
            src={avatar}
            className="w-24 h-24 text-large"
          />
          <input
            {...register("avatar")}
            type="file"
            style={{ display: "none" }}
          />
        </label>
        <div className=" flex flex-col items-end">
          <div className=" w-[250px] flex justify-between">
            <span>유저명</span>
            <input
              {...register("username")}
              type="text"
              className=" border outline-none mb-3"
              placeholder="유저명"
            />
          </div>
          <div className=" w-[250px] flex justify-between">
            <span>아이디</span>
            <input
              {...register("userId")}
              type="text"
              className=" border outline-none mb-3"
              placeholder="아이디"
            />
          </div>
          <div className=" w-[250px] flex justify-between">
            <span>비밀번호</span>
            <input
              {...register("password")}
              type="password"
              className=" border outline-none"
              placeholder="비밀번호"
            />
          </div>
          <div className=" w-[250px] flex justify-between">
            <span>비밀번호 확인</span>
            <input
              {...register("passwordCheck", {
                validate: (value) =>
                  value === watchPassword || "비밀번호가 일치하지 않습니다",
              })}
              type="password"
              className=" border outline-none"
              placeholder="비밀번호 확인"
            />
          </div>
        </div>
      </div>
      {/* 에러 폼 */}
      <div className=" mt-2">
        <ErrorForm message={errors.password?.message} />
        <ErrorForm message={errors.passwordCheck?.message} />
      </div>
      <Button size="sm" className=" w-32 mt-5" type="submit">
        저장
      </Button>
    </form>
  );
}
