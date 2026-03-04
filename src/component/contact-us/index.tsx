import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookQR from "@/assets/FacebookQR";
import InstagramQR from "@/assets/InstagramQR";
import { Button } from "@/component/common/button";
import { Input } from "@/component/common/input";
import { TextArea } from "@/component/common/textarea";

export function ContactUs() {
  const actionPath =
    "https://docs.google.com/forms/u/0/d/1jQA1KNxnd2hrT2LDnDSTnN-lqqRyf5skdEx-0oWkCd0/previewResponse";
  return (
    <section className="py-12">
      <div className="container-space flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-32 lg:px-32">
        <form className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Send us a message</h2>
          <div>
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <Input name="name" id="name" className="text-[#333333]" required />
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                name="email"
                id="email"
                className="text-[#333333]"
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <Input name="subject" id="subject" className="text-[#333333]" />
            </div>
          </div>
          <div>
            <label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <TextArea
              name="message"
              id="message"
              className="h-[5rem] text-[#333333]"
              required
            />
          </div>
          <Button
            variant="solid"
            color="primary"
            type="submit"
            className="self-start mt-4"
          >
            Send
          </Button>
        </form>
        <div className="flex flex-col gap-6 items-start pt-18">
          <a className="inline-flex items-center gap-2" href="tel:07771569445">
            <FontAwesomeIcon
              icon={faPhone}
              className="flex-none text-2xl"
              width={24}
              height={24}
            />
            07771569445
          </a>
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
          <div className="inline-flex items-center gap-2">
            <FontAwesomeIcon
              icon={faMapPin}
              className="flex-none text-2xl"
              width={24}
              height={24}
            />
            York and surrounding area
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <a
              href="https://www.facebook.com/profile.php?id=61585800795455"
              target="_blank"
              rel="noopener"
            >
              <FacebookQR
                width={240}
                height={180}
                className="hover:-translate-y-1 duration-150"
              />
            </a>
            <a
              href="https://www.instagram.com/fairydreampainting/"
              target="_blank"
              rel="noopener"
            >
              <InstagramQR
                width={240}
                height={180}
                className="hover:-translate-y-1 duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
