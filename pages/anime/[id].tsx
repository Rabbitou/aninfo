import { useRouter } from "next/router";
import React from "react";
import MainDetails from "../../components/AnimeDetail/MainDetails";
import SideBarDetails from "../../components/AnimeDetail/SideBarDetails";

export default function AnimePage() {
  const router = useRouter();
  const animeId = router.query.id;
  return (
    <section className="max-w-[1400px] w-full mx-auto">
      <div className="header">
        <div className="banner w-full h-[400px] absolute top-0 left-0">
          <img
            className="w-full h-full object-cover"
            src="/964390.png"
            alt=""
          />
        </div>
        <div className="flex relative px-6 pt-[180px] w-full ">
          <div className="coverimg w-[300px] h-[480px] col-span-1 shrink-0 grow-0">
            <img
              src="/PinCat.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col mt-[180px] px-6">
            <h4 className="text-2xl font-bold uppercase mb-4">One Piece</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              deleniti obcaecati placeat numquam consequatur velit sed.
              Molestiae suscipit aspernatur deserunt?
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 mt-6">
        <SideBarDetails />
        <MainDetails />
      </div>
    </section>
  );
}
