"use client";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const randomRotate = (deg: number) => Math.random() * deg * 2 - deg;

const carouselImages = [
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face0.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face1.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face2.jpg`,
    width: 1317,
    height: 1645,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face3.jpg`,
    width: 1115,
    height: 1263,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face4.jpg`,
    width: 2048,
    height: 1536,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face5.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face6.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face7.jpg`,
    width: 1043,
    height: 1330,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face8.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face9.jpg`,
    width: 1278,
    height: 1814,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face10.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/arm4.jpg`,
    width: 2048,
    height: 1361,
    rotate: randomRotate(4),
  },
];

const arms = [
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/arm1.jpg`,
    width: 1446,
    height: 2046,
    rotate: randomRotate(15),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/arm5.jpg`,
    width: 2086,
    height: 1568,
    rotate: randomRotate(15),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/arm2.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(15),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/arm3.jpg`,
    width: 1450,
    height: 2048,
    rotate: randomRotate(15),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/arm4.jpg`,
    width: 2048,
    height: 1361,
    rotate: randomRotate(15),
  },
  {
    name: `${process.env.NEXT_PUBLIC_HOMEPAGE}/face6.jpg`,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
  },
];

var settings = {
  infinite: true,
  speed: 500,
  rows: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  variableWidth: true,
  dots: true,
  arrows: false,
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState<number>(2);

  useEffect(() => {
    if (!isClient) return;

    const listener = () => {
      const newSlides = document.body.clientWidth > 1024 ? 4 : 2;
      if (newSlides !== slidesToShow) setSlidesToShow(newSlides);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [isClient, slidesToShow]);

  useEffect(() => {
    setIsClient(true);
    setSlidesToShow(document.body.clientWidth > 1024 ? 4 : 2);
  }, []);

  return (
    <main className="flex flex-col">
      <section className="flex flex-col lg:flex-row justify-stretch items-center flex-0">
        <div className="flex flex-col justify-center items-center flex-none lg:w-[25%]">
          <Image
            className="max-w-[33vh] h-auto"
            src={`${process.env.NEXT_PUBLIC_HOMEPAGE}/logo.jpg`}
            alt="Fairy Dream Face Painting Logo"
            width={1024}
            height={1024}
            priority
          />
          <h2 className="text-center text-2xl font-sans italic text-[#9C3C74]">
            Let us make your dream come true
          </h2>
        </div>
        <div className="flex-1 w-full lg:w-[70%] pt-8 pb-12 px-4 lg:pl-0 lg:pr-6 relative">
          <Slider {...settings} slidesToShow={slidesToShow} className="mx-auto">
            {carouselImages.map((img, index) => (
              <div key={img.name} className="py-4 flex text-center">
                <Image
                  alt={`Face Painting ${index + 1}`}
                  src={img.name}
                  width={img.width}
                  height={img.height}
                  className="max-h-[30lvh] w-auto rounded-2xl shadow-[0_3px_5px_rgba(0,0,0,0.2)] mx-auto border-[0.4lvw] border-[#fffdfd]"
                  {...(isClient
                    ? {
                        style: {
                          transform: `rotateZ(${img.rotate}deg)`,
                        },
                      }
                    : {})}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="bg-[#9C3C74] py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12 container-space justify-center items-center lg:items-start">
          <Image
            className="h-[100%] flex-0 rounded-lg shadow-md my-4 lg:order-1"
            src={`${process.env.NEXT_PUBLIC_HOMEPAGE}/family.jpg`}
            alt="who we are"
            width={400}
            height={400}
            priority
          />
          <div className="flex-1 px-4 lg:px-0 max-w-[40rem] lg:order-0">
            <div className="py-4 rounded-lg flex flex-col gap-4 text-lg text-white leading-[1.6]">
              <p className="text-3xl font-bold">Hello!</p>
              <p>
                My name is Ngoc and we are a family of 4 living in West
                Yorkshire with our 4 adorable cats. My first experience with
                face painting was my volunteer work at my daughter’s school
                summer fair. The fun of being creative and the joy of seeing
                children’s happy faces after having their face painted make me
                fall in love with the work. I have decided to go fully
                professional by taking a face painting and body art course
                together with Level 1 & level 2 General Art.
              </p>
              <p>
                Face painting is not simply a design for me. I believe that it
                is the way to express oneself. Your choice of design, character
                or colour is the statement of your interest and personality. I
                pride myself as a creative painter who love to be challenged
                with individual request. No design is the same for me because my
                drawings always reflect the interest of the person I paint on.
                Whether it is a birthday party, a wedding or a christening
                event, I am here to bring you a memorable and personal
                experience. Tell me your dream and we will turn it into art
                together.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
          {arms.map((img, index) => (
            <Image
              src={img.name}
              key={img.name}
              alt={img.name}
              width={img.width}
              height={img.height}
              className="absolute top-[50%] w-[30%] min-h-[120%] rounded-2xl"
              {...(isClient
                ? {
                    style: {
                      transform: `translate(-50%, -50%) rotateZ(18deg)`,
                      left: `${index * (100 / (arms.length - 1))}%`,
                      zIndex: Math.round(
                        arms.length - Math.abs(index - arms.length / 2),
                      ),
                    },
                  }
                : {})}
            />
          ))}
        </div>
        <div className="relative flex flex-col gap-6 z-10 pt-6 pb-4 lg:pt-16 lg:pb-10 bg-linear-to-b to-[rgba(156,60,116,0.2)] from-[rgba(0,0,0,0.2)] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
          <div className="container-space flex justify-center gap-[4lvw] text-2xl">
            {["DBS Checked", "Insurrance Covered", "Hygene"].map((i) => (
              <div
                key={i}
                className="flex bg-white flex-col gap-4 w-[17rem] max-w-[30lvw] justify-center items-center text-[#9C3C74] rounded-3xl py-4 lg:py-10 px-4 shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  className="text-emerald-500 text-5xl"
                />
                <div className="text-center">{i}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-white text-shadow-sm text-lg">
            <Link href="/general-information" className="underline">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="relative bg-[#9C3C74]">
        <div className="py-12 flex flex-col gap-6 justify-center items-center relative">
          <h2 className="text-3xl font-bold text-white">Follow Us</h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <a
              href="https://www.facebook.com/profile.php?id=61585800795455"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_HOMEPAGE}/qr-facebook.svg`}
                alt="Facebook QR Code"
                width={350}
                height={350}
                className="max-h-[25lvh] w-auto bg-white rounded-lg p-2 shadow-md hover:-translate-y-1 hover:shadow-lg duration-150"
              />
            </a>
            <a
              href="https://www.instagram.com/fairydreampainting/"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_HOMEPAGE}/qr-instagram.svg`}
                alt="Instagram QR Code"
                width={350}
                height={350}
                className="max-h-[25lvh] w-auto bg-white rounded-lg p-2 shadow-md hover:-translate-y-1 hover:shadow-lg duration-150"
              />
            </a>
          </div>
          <div className="text-center text-xl text-white mt-2">
            Want to pay us a visit?{" "}
            <Link href="contact" className="underline font-bold">
              Contact now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
