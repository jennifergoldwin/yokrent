/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import car from "../../../public/assets/img_car.png";
import CustomInput from "@/components/input";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl py-9">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="font-bold text-3xl text-center">Join Us!</h1>
            <CustomInput
              label="Email Address"
              placeholder="Insert your email"
              name="email"
              type="email"
            />
            <CustomInput
              label="Telephone"
              placeholder="Insert your number"
              name="telephone"
              type="tel"
            />
            <CustomInput
              label="Password"
              placeholder="Insert your password"
              name="password"
              type="password"
            />
            <CustomInput
              label="Confirm Password"
              placeholder="Confirm your password"
              name="confirm-password"
              type="password"
            />
            <div className="gap-3 flex">
              <input type="checkbox" />
              <label>
                By tapping “Sign Up” you accept our terms and condition
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#5CB85F] rounded w-full py-2 px-4 text-white my-4"
            >
              Register
            </button>
            <p color="#5F6D7E">
              Already have an account?{" "}
              <Link href="/login">
                <strong>Log in</strong>
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
