import Image from "next/image";
import footerLogo from "@/assets/logo_footer.jpg";

export function Footer() {
  return (
    <footer className="pb-10 pt-16">
      <div className="container-space flex flex-col items-center justify-center">
        <Image
          src={footerLogo}
          alt="Footer Logo"
          width={1329}
          height={403}
          className="max-h-[20lvh] w-auto h-auto max-w-full"
        />
      </div>
    </footer>
  );
}
