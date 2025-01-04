import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import Page from "../../components/Page";
import { Link } from "react-router";

export default function LoginPage() {
  const [data, setData] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      ["display name"]: "ken",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (data === null) return;

    const login = async () => {
      const { data: fetchData, error } = await supabase.auth.signInWithOtp({
        email: data.email,
      });
      if (error)
        setError("root", {
          message: error.message,
        });
      console.log(error.message, fetchData);
    };
    login();
  }, [data, setError]);
  const onFormLoginSubmit = async (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <Page className="flex flex-col items-center justify-center bg-blue-200">
      <form
        onSubmit={handleSubmit(onFormLoginSubmit)}
        className="flex w-[15rem] flex-col gap-5 rounded-2xl bg-green-600 p-5 lg:w-[50rem]"
      >
        {errors?.root && (
          <h1 className="text-xl font-semibold text-red-700">
            Error: {errors.root.message}
          </h1>
        )}
        <h1 className="text-center text-2xl font-bold uppercase tracking-wider">
          Login
        </h1>
        <div className="flex flex-col gap-5">
          <Label htmlFor="post-title" className="w-[10rem]">
            Email
          </Label>
          <Input
            id="email"
            placeholder="jonhdoe@gmail.com"
            className="bg-white"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-5">
          <Label htmlFor="post-content" className="flex-1 text-left">
            Password
          </Label>
          <Input
            id="password"
            placeholder="Password"
            className="bg-white"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button type="submit">Login</Button>
        <Link
          to="../signup"
          className="text-center font-semibold text-white underline"
        >
          Sign up
        </Link>
      </form>
    </Page>
  );
}
