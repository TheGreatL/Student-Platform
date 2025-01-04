import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

export default function LoginPage() {
  const [data, setData] = useState(null);
  const {
    register,
    formState: { errors },
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
    };
    signUp();
  }, [data]);
  const onFormLoginSubmit = async (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <main className="flex h-screen flex-col overflow-auto bg-green-500">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(onFormLoginSubmit)}
        className="flex flex-col gap-5 px-5"
      >
        {" "}
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
          <Label htmlFor="post-content" className="flex-1 text-left"></Label>
          <Input
            id="password"
            placeholder="Password"
            className="bg-white"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
}
