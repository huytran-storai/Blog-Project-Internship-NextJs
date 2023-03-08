import React from "react";
import { ImHeartBroken } from "react-icons/im";
export default function Error(): JSX.Element {
  return (
    <>
      <div className="flex items-center justify-center">
        <ImHeartBroken color="red" fontSize={30}></ImHeartBroken>
        <div className="font-bold text-2xl ml-2 text-orange-700">
          Sorry, something went wrong....
        </div>
      </div>
    </>
  );
}
