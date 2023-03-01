import { FireIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
    number: string;
    job:string;
  };

function JoinEvent() {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      console.log(formData);
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        console.log("Response received");
        if (res.status == 200) {
          console.log("Response succeeded!");
        }
      });
      toast.success(
        "اطلاعات شما با موفقیت ثبت شد در اسرع وقت با شما تماس خواهیم گرفت.",
        {
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
            direction: "rtl",
          },
          duration: 8000,
        }
      );
  
      reset();
    };
  return (
    <div className="w-full bg-cover bg-center h-[40rem] bg-signup rounded-2xl mb-20">
      <div className="flex items-center justify-start h-full w-full bg-neutral-800 bg-opacity-20 rounded-2xl">
        <div className="text-start px-4 space-y-6 w-full max-w-6xl mx-auto">
        <div className="flex px-14 space-x-2 space-x-reverse items-center justify-center">
        <UserPlusIcon className="w-8 text-white" />
        <p className="text-white my-10 text-lg md:text-xl font-bold text-center lg:text-start">
          ثبت نام برای رویداد
        </p>
      </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col space-y-6 mx-auto w-full sm:w-[90%] md:w-[75%] lg:w-[60%] bg-[#FF821E]/20 p-8 rounded-xl"
        >
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 sm:space-y-0 space-y-5 w-full justify-between">
            <input
              {...register("name", { required: "This is required." })}
              placeholder="نام و نام خانوادگی *"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email", {
                required: "This is required.",
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="ایمیل *"
              className="contactInput"
              type="email"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 sm:space-y-0 space-y-5 w-full justify-between">
          <input
            {...register("number", {
              required: true,
              minLength: 6,
              maxLength: 12,
              pattern: /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/,
            })}
            placeholder="شماره تلفن *"
            className="contactInput"
            type="text"
          />
          <input
            {...register("job", { required: "This is required." })}
            placeholder="سمت شغلی *"
            className="contactInput"
            type="text"
          />
          </div>
          <input
            {...register("message", { required: "This is required." })}
            placeholder="نام شرکت*"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#FF821E]/70 hover:bg-[#FF821E] drop-shadow-[0px_0px_4px_#FF821E] py-4 md:py-4 rounded-lg text-white text-lg lg:text-xl cursor-pointer"
          >
           ارسال درخواست
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default JoinEvent;