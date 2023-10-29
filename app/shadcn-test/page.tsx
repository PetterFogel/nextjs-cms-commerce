"use client";

import { Button } from "@/components/ui/button";

const page = () => {
  const test = () => {
    console.log("TEST");
  };

  return (
    <main className="flex p-4">
      <div className="flex gap-4">
        <Button onClick={test}>Add to cart</Button>
        <Button variant={"ghost"}>Remove from cart</Button>
      </div>
    </main>
  );
};

export default page;
