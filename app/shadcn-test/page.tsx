"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Mail } from "lucide-react";

const page = () => {
  const buttonClick = () => console.log("Button click");

  return (
    <main className="flex flex-col gap-12 p-4">
      <div className="flex flex-wrap gap-4  ">
        <Button onClick={buttonClick}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Saving
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
    </main>
  );
};

export default page;
