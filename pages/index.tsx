import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NotionService from "../notion/config";

const Home: NextPage = () => {
  const Client = new NotionService();
  const notion = Client.getPublishedBlogPosts();
  console.log(notion);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Ejemplo de proyecto en nextjs hecho por Mijael Cama
            </div>
            <p className="text-gray-700 text-base">
              Esto es un card realizado con tailwind y levantado en el framework
              de nextjs Acontinuacion un response de notion:
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #nextjs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #docker
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
