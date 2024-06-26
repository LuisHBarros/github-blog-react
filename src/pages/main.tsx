import React from "react";
import { UserCard } from "../components/UserCard";

export function Main() {
  return (
    <div className="w-full px-[8rem] ">
      <UserCard />
      <div className="bg-base-backgroud-light dark:bg-base-background-dark"></div>
    </div>
  );
}
