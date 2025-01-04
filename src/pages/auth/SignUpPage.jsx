import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const [data, setData] = useState(null);
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    defaultValues: {
      ["display name"]: "ken",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (data === null) return;

    const signUp = async () => {
      const { data: fetchData, error } = await supabase.auth.signUp(data);
      console.log(fetchData, error);
      if (error)
        setError("root", {
          message: error.message,
        });
    };
    signUp();
  }, [data, setError]);

  console.log(errors);
  const onFormSignUp = async (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <Page className="flex flex-col items-center justify-center bg-blue-200">
      <form
        onSubmit={handleSubmit(onFormSignUp)}
        className="flex w-[15rem] flex-col gap-5 rounded-2xl bg-green-600 p-5 lg:w-[50rem]"
      >
        {" "}
        <h1 className="text-center text-2xl font-bold uppercase tracking-wider">
          SignUp
        </h1>
        {errors?.root && (
          <h1 className="text-xl font-semibold text-red-700">
            Error: {errors.root.message}
          </h1>
        )}
        <div className="flex flex-col gap-5">
          <Label htmlFor="post-title" className="w-[10rem]">
            Name
          </Label>
          <Input
            id="Name"
            placeholder="jonhdoe@gmail.com"
            className="bg-white"
            {...register("Name", { required: "Name is required" })}
          />
          {errors.Name && <p>{errors.Name.message}</p>}
        </div>
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
            Name
          </Label>
          <Input
            id="password"
            placeholder="Password"
            className="bg-white"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button type="submit">Create Account</Button>
      </form>
    </Page>
  );
}
