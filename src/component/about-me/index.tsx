import Image from "next/image";
import family from "@/assets/family.jpg";

export function AboutMe() {
  return (
    <main className="flex flex-col">
      <section className="py-12 relative">
        <div className="flex flex-col lg:flex-row gap-12 container-space justify-center items-center">
          <Image
            className="h-[100%] flex-0 rounded-lg shadow-md my-4 lg:order-1"
            src={family}
            alt="who we are"
            width={400}
            height={400}
            preload
          />
          <div className="flex-1 px-4 lg:px-0 max-w-[40rem] lg:order-0">
            <div className="py-4 rounded-lg flex flex-col gap-4 text-lg leading-[1.6]">
              <p>
                Hello! My name is Ngoc and we are a family of 4 living in West
                Yorkshire with our 4 adorable cats. My first experience with
                face painting was my volunteer work at my daughter’s school
                summer fair. The fun of being creative and the joy of seeing
                children’s happy faces after having their face painted make me
                fall in love with the work. I have decided to go fully
                professional by taking a professional course for face painting
                and body art.
              </p>
              <p>
                Face painting is not simply a design for me. I believe that it
                is the way to express oneself. Your choice of design, character
                or colours is the statement of your interest and personality. I
                pride myself as a creative painter who love to be challenged
                with individual request. No design is the same for me because my
                drawings always reflect the interest of the person I paint on.
                Whether it is a birthday party, a wedding or a corporate event,
                I am here to bring you a memorable and personal experience. Tell
                me your dream and we will turn it into art together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
