import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1
          className="text-3xl md:text-6xl text-center text-neutral-800 mb-6"
          data-testid="main_title"
        >
          Trello brings all your tasks, teammates, and tools together
        </h1>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button className="mt-6" size="lg" asChild data-testid="main_button">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
        data-testid="main_description"
      >
        From weekly sprints to annual planning, Timeline view keeps all tasks on
        track. Quickly get a glimpse of what’s coming down the pipeline and
        identify any gaps that might impede your team’s progress.
      </div>
    </div>
  );
};

export default MarketingPage;
