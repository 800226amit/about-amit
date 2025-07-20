import Hero from "../components/sections/Hero"
// import {  } from "@/components/layout/Standardize";

import Standardize from "@/components/layout/Standardize";

export default function Home() {
  return (

    <div className="bg-amber-500">
      <div className="bg-amber-400 container mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16">

        <Standardize>
          <Hero />
        </Standardize>
      </div>
    </div>

  );
}
