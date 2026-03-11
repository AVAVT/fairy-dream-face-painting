"use client";

import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import FacebookQR from "@/assets/FacebookQR";
import InstagramQR from "@/assets/InstagramQR";
import { Button } from "@/component/common/button";
import { Input } from "@/component/common/input";
import { TextArea } from "@/component/common/textarea";

const actionPath = process.env.NEXT_PUBLIC_BOOKING_URL || "";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactUs() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = async (data: FormState) => {
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      setError("root", { message: "Please enter all required fields" });
      return;
    }

    if (!actionPath) {
      setError("root", {
        message:
          "Unknown error, please try again or contact fairydreampainting@gmail.com directly",
      });
      return;
    }

    setPending(true);
    setSent(false);

    try {
      await axios.post(
        actionPath,
        JSON.stringify({ name, email, subject: subject || "<empty>", message }),
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        },
      );
      setSent(true);
      reset();
    } catch (e) {
      console.error(e);
      setError("root", {
        message:
          "Unknown error, please try again or contact fairydreampainting@gmail.com directly",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="py-12">
      <div className="container-space flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-32 lg:px-32">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl font-bold">Send us a message</h2>

          <div>
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              className="text-[#333333]"
              defaultValue=""
              {...register("name", { required: true })}
            />
            {errors.name && (
              <div className="text-red-500">Please enter a name</div>
            )}
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                className="text-[#333333]"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <div className="text-red-500">Please enter a valid email</div>
              )}
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <Input
                id="subject"
                className="text-[#333333]"
                {...register("subject")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <TextArea
              id="message"
              className="h-[5rem] text-[#333333]"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <div className="text-red-500">Please enter a message</div>
            )}
          </div>
          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}
          {sent && (
            <div className="text-emerald-700">
              Message delivered! We will reply as soon as we can!
            </div>
          )}
          <Button
            variant="solid"
            color="primary"
            type="submit"
            loading={pending}
            className="self-start mt-4"
          >
            Send
          </Button>
        </form>
        <div className="flex flex-col gap-6 items-stretch lg:pt-18">
          <div className="grid grid-cols-2 gap-4">
            <a
              className="inline-flex items-center gap-2"
              href="mailto:fairydreampainting@gmail.com"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="flex-none text-2xl"
                width={24}
                height={24}
              />
              fairydreampainting@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 justify-end">
              <FontAwesomeIcon
                icon={faMapPin}
                className="flex-none text-2xl"
                width={24}
                height={24}
              />
              York and surrounding area
            </div>
          </div>

          <a className="inline-flex items-center gap-2" href="tel:07771569445">
            <FontAwesomeIcon
              icon={faPhone}
              className="flex-none text-2xl"
              width={24}
              height={24}
            />
            07771569445
          </a>

          <div className="flex gap-12">
            <a
              href="https://www.facebook.com/profile.php?id=61585800795455"
              target="_blank"
              rel="noopener"
            >
              <FacebookQR
                width="100%"
                height="100%"
                className="hover:-translate-y-1 duration-150"
              />
            </a>
            <a
              href="https://www.instagram.com/fairydreampainting/"
              target="_blank"
              rel="noopener"
            >
              <InstagramQR
                width="100%"
                height="100%"
                className="hover:-translate-y-1 duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
