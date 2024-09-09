import React from "react";
import { Partnerships } from "./partnerships/Partnerships";
import { PetServices } from "./petServices/petServices";

export const Home = () => {
  return (
    <>
      <PetServices />
      <Partnerships />
    </>
  );
};
