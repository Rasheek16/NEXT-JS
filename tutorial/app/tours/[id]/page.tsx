import React from "react";
import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
function page({ params }: { params: { id: string } }) {
  console.log(mapsImg);

  return (
    <div className="">
      <h1 className="text-4xl">ID:{params.id}</h1>
      <section className=" flex gap-x-4 mt-4">
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            className="w-48 h-48 object-cover rounded"
            priority
            width={192}
            height={192}
          />
          <h2>Local Image</h2>
        </div>
        <div className="">
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
            alt="animal"
            className="w-48 h-48 object-cover rounded"
            priority
            width={192}
            height={192}
          />
          <h2>Remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
