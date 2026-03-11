import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import arm4 from "@/assets/arm4.jpg";
import dbsCheck from "@/assets/dbs-check.jpeg";
import FacebookQR from "@/assets/FacebookQR";
import face0 from "@/assets/face0.jpg";
import face1 from "@/assets/face1.jpg";
import face2 from "@/assets/face2.jpg";
import face3 from "@/assets/face3.jpg";
import face4 from "@/assets/face4.jpg";
import face5 from "@/assets/face5.jpg";
import face6 from "@/assets/face6.jpg";
import face7 from "@/assets/face7.jpg";
import face8 from "@/assets/face8.jpg";
import face9 from "@/assets/face9.jpg";
import face10 from "@/assets/face10.jpg";
import hygene from "@/assets/hygene.jpeg";
import InstagramQR from "@/assets/InstagramQR";
import safety from "@/assets/safety.jpeg";
import welcome1 from "@/assets/welcome1.jpeg";
import welcome2 from "@/assets/welcome2.jpeg";
import welcome3 from "@/assets/welcome3.jpeg";

const randomRotate = (deg: number) => Math.random() * deg * 2 - deg;

const carouselImages = [
  {
    name: face0,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
    alt: "Face Painting 0",
  },
  {
    name: face1,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
    alt: "Face Painting 1",
  },
  {
    name: face2,
    width: 1317,
    height: 1645,
    rotate: randomRotate(4),
    alt: "Face Painting 2",
  },
  {
    name: face3,
    width: 1115,
    height: 1263,
    rotate: randomRotate(4),
    alt: "Face Painting 3",
  },
  {
    name: face4,
    width: 2048,
    height: 1536,
    rotate: randomRotate(4),
    alt: "Face Painting 4",
  },
  {
    name: face5,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
    alt: "Face Painting 5",
  },
  {
    name: face6,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
    alt: "Face Painting 6",
  },
  {
    name: face7,
    width: 1043,
    height: 1330,
    rotate: randomRotate(4),
    alt: "Face Painting 7",
  },
  {
    name: face8,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
    alt: "Face Painting 8",
  },
  {
    name: face9,
    width: 1278,
    height: 1814,
    rotate: randomRotate(4),
    alt: "Face Painting 9",
  },
  {
    name: face10,
    width: 1536,
    height: 2048,
    rotate: randomRotate(4),
    alt: "Face Painting 10",
  },
  {
    name: arm4,
    width: 2048,
    height: 1361,
    rotate: randomRotate(4),
    alt: "Arm Painting 4",
  },
];

const welcomeImages = [
  {
    name: welcome1,
    width: 1059,
    height: 1512,
    alt: "Face Painting 1",
  },
  {
    name: welcome2,
    width: 1200,
    height: 1600,
    alt: "Face Painting 1",
  },
  {
    name: welcome3,
    width: 1200,
    height: 1600,
    alt: "Face Painting 1",
  },
];

var settings = {
  infinite: true,
  speed: 500,
  rows: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  variableWidth: true,
  dots: true,
  arrows: false,
};

var settings2 = {
  infinite: true,
  speed: 500,
  rows: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  arrows: false,
};

export function MainPageContent({ isClient }: { isClient: boolean }) {
  return (
    <main className="flex flex-col">
      <section className="py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12 container-space justify-center items-center">
          <div className="lg:order-1 flex-0 w-[300px]">
            <Slider {...settings2}>
              {welcomeImages.map((img) => (
                <div key={img.alt} className="px-4">
                  <Image
                    className="max-h-full max-w-full flex-0 rounded-lg shadow-md"
                    src={img.name}
                    alt="who we are"
                    width={300}
                    height={300}
                    preload
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex-1 px-4 lg:px-0 max-w-[40rem] lg:order-0">
            <div className="py-4 rounded-lg flex flex-col gap-4 text-lg leading-[1.6]">
              <p>Welcome to Fairy Dream Face Painting!</p>
              <p>
                Whether it is a birthday party, wedding or company event, we
                have everything you need to make your event special and
                memorable.
              </p>
              <p>
                <strong className="font-bold">Personal Events:</strong> our
                all-in-one packages for face painting and glitter tattoo are the
                best choice for any personal event such as birthday party,
                christening or wedding. These simple packages with no hidden
                cost help you to plan your event effectively whilst knowing
                you’re getting the best service.
              </p>
              <p>
                <strong className="font-bold">Corporate Events:</strong> Perfect
                for both formal corporate events and informal work celebrations,
                our face painting and glitter bar service will surely be the
                “sparkling” talking point of the night.
              </p>
              <p>
                {" "}
                <strong className="font-bold">Festivals:</strong> Let us
                sprinkle more magic and excitement to your festival with our
                fee-per-face or hourly fee service. Our customized designs suit
                all crowded events where both speed and quality are required.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12 container-space justify-center items-center">
          <Image
            className="h-[100%] flex-0 rounded-lg shadow-md my-4"
            src={dbsCheck}
            alt="DBS check"
            width={300}
            height={300}
            preload
          />
          <div className="flex-1 px-4 lg:px-0 max-w-[40rem] text-lg leading-[1.6]">
            <p>
              We are fully DBS checked and insured up to £5 million to give you
              peace of mind. Please feel free to contact us if you require
              further information.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12 container-space justify-center items-center">
          <Image
            className="h-[100%] flex-0 rounded-lg shadow-md my-4 lg:order-1"
            src={safety}
            alt="Safety"
            width={300}
            height={300}
            preload
          />
          <div className="flex-1 px-4 lg:px-0 max-w-[40rem] lg:order-0 text-lg leading-[1.6]">
            <p>
              We only use professional EC compliant water-based face paints,
              which are designed specifically for use on the face and body -
              such as Diamond FX, Tag, Fusion, Super Star, etc. For detailed
              information about our safety standards, please see{" "}
              <Link href="/general-information" className="underline">
                this page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12 container-space justify-center items-center">
          <Image
            className="h-[100%] flex-0 rounded-lg shadow-md my-4"
            src={hygene}
            alt="hygene"
            width={300}
            height={300}
            preload
          />
          <div className="flex-1 px-4 lg:px-0 max-w-[40rem] text-lg leading-[1.6]">
            <p>
              We are compliant with all industry standards for hygiene. Please
              find more details here.
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="py-12 flex flex-col gap-6 justify-center items-center relative">
          <h2 className="text-3xl font-bold">Follow Us</h2>
          <div className="flex flex-row gap-12">
            <a
              href="https://www.facebook.com/profile.php?id=61585800795455"
              target="_blank"
              rel="noopener"
            >
              <FacebookQR
                className="hover:-translate-y-1 duration-150"
                width="100%"
                height="100%"
              />
            </a>
            <a
              href="https://www.instagram.com/fairydreampainting/"
              target="_blank"
              rel="noopener"
            >
              <InstagramQR
                className="hover:-translate-y-1 duration-150"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="text-center text-xl mt-2">
            Want to pay us a visit?{" "}
            <Link href="contact" className="underline font-bold">
              Contact now
            </Link>
          </div>
        </div>
      </section>
      <section className="relative bg-secondary">
        <div className="relative flex flex-col gap-6 z-10 pt-6 pb-4 lg:pt-16 lg:pb-10">
          <div className="flex-1 w-full pt-8 pb-12 lg:pl-0 relative">
            <Slider {...settings} className="mx-auto">
              {carouselImages.map((img) => (
                <div key={img.alt} className="py-4 flex text-center">
                  <Image
                    alt={img.alt}
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
        </div>
      </section>
    </main>
  );
}
