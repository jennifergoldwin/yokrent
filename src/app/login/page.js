"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import car from "../../../public/assets/img_car.png";
import CustomInput from "@/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userData } from "@/utils/data";
export default function Page() {
  const router = useRouter();
  const form = useForm({
    mode: "all",
    defaultValues: {
      emailLogin: "",
      passwordLogin: "",
    },
  });
  const handleUser = () => {
    const user = userData.filter((item) => {
      if (
        item.email === form.watch("emailLogin") &&
        form.watch("passwordLogin") === item.password
      ) {
        return item;
      }
    });
    if (user.length <= 0) {
      alert("Email or password invalid!");
    } else {
      localStorage.setItem("isLogin", true);
      if (user[0].role === "admin") {
        router.push(`/admin/${user[0].name}/data-mobil`);
      } else {
        router.push("/");
        router.refresh();
      }
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl py-9">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="font-bold text-3xl text-center">Welcome back!</h1>
            <CustomInput
              form={form}
              label="Email Address"
              placeholder="Insert your email"
              name="emailLogin"
              type="email"
            />
            <CustomInput
              form={form}
              label="Password"
              placeholder="Insert your password"
              name="passwordLogin"
              type="password"
            />
            <div className="gap-3 flex">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div onClick={handleUser}>
              <button className="bg-[#5CB85F] rounded w-full py-2 px-4 text-white my-4">
                Log in
              </button>
            </div>
            <p color="#5F6D7E">
              Don't have an account?{" "}
              <Link href="/register">
                <strong>Register</strong>
              </Link>
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={car} alt="" className=" w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
