"use client";

import { useEffect, useState } from "react";
import { MainPageContent } from "@/component/homepage";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <MainPageContent isClient={isClient} />;
}
