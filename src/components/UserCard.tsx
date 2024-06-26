import { GithubLogo, Buildings, PersonSimple } from "phosphor-react";
import React from "react";

export function UserCard() {
  return (
    <div className="flex items-center justify-center mt-[-4rem] ">
      <div className="w-1/2 flex row p-12 gap-8 rounded-lg bg-base-label-light dark:bg-base-label-dark">
        {/* Conteúdo da segunda div aqui */}
        <img
          src="https://github.com/LuisHBarros.png"
          alt="Imagem"
          className="w-24 h-24 rounded-b-md mx-auto mb-4"
        />
        <section className="text-base-text-light dark:base-text-dark">
          <h1 className="text-xl font-bold text-base-title-light dark:base-title-dark">
            Name
          </h1>
          <p className="text-base-text-light dark:text-base-text-dark">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ipsum
            facere maiores voluptatibus et, asperiores eius officia quasi
            ratione, eveniet obcaecati pariatur consectetur, voluptate vero
            adipisci atque quibusdam. Officia, similique.
          </p>
          <div className="mt-4 text-base-text-light dark:text-base-text-dark">
            <div className="flex gap-8 space-x-2">
              <a className="flex items-center space-x-1" href="#">
                <GithubLogo size={24} />
                <span>Github</span>
              </a>
              <a className="flex items-center space-x-1" href="#">
                <Buildings size={24} />
                <span>Linkedin</span>
              </a>
              <a className="flex items-center space-x-1" href="#">
                <PersonSimple size={24} />
                <span>32 seguidores</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
