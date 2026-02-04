import Image from "next/image";

export function Footer() {
  return (
    <footer className="pb-10 pt-16">
      <div className="container-space flex flex-col items-center justify-center">
        <Image
          src={process.env.NEXT_PUBLIC_HOMEPAGE + "/logo_footer.jpg"}
          alt="Footer Logo"
          width={1329}
          height={403}
          className="max-h-[20lvh] w-auto h-auto max-w-full"
        />
      </div>
    </footer>
  );
}
