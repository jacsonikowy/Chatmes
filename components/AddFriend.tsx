"use client";
import React, { useEffect } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addFriendValidator } from "@/lib/validations/add-friend";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { useToast } from "./ui/use-toast";
import { toPusherKey } from "@/lib/utils";
import { pusherClient } from "@/lib/pusher";
import { useSession } from "next-auth/react";

type FormData = z.infer<typeof addFriendValidator>;

const AddFriend = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(addFriendValidator),
  });

  const { toast } = useToast();

  const addFriend = async (email: string) => {
    try {
      const validatedEmail = addFriendValidator.parse({ email });

      await axios.post("/api/friends/add", {
        email: validatedEmail,
      });
      toast({
        title: "Send Friend request",
        description: "Successfully sent friend request",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", { message: error.message });
        return;
      }

      if (error instanceof AxiosError) {
        setError("email", { message: error.response?.data });
        return;
      }

      setError("email", { message: "Something went wrong" });
    }
  };

  const onSubmit = (data: FormData) => {
    addFriend(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-[20px] items-center relative"
    >
      <div className="flex flex-col">
        <input
          {...register("email")}
          name="email"
          className="border-2 border-[#979797] shadow-lg rounded-lg text-black"
          type="text"
          placeholder="you@example.com"
        />
        <div className="absolute top-16 text-destructive">
          {errors.email?.message}
        </div>
      </div>
      <Button variant="primary" text="Add" />
    </form>
  );
};

export default AddFriend;
