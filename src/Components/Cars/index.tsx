import React, { useEffect, useMemo, useState } from "react";
import { useSearchPlayerQuery } from "../../graphql";
import Pill from "../Pill";
import Image from "next/image";
import { ImageError } from "next/dist/server/image-optimizer";
import Link from "next/link";
const Cars: React.FC = (props) => {
  const [playerName, setPlayerName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [nationName, setNationName] = useState("");

  const [searchPlayer, setSearchPlayer] = useState(false);

  const context = useMemo(
    () => ({
      variables: {
        TeamName: teamName,
        PlayerName: playerName,
        NationName: nationName,
      },
    }),
    [searchPlayer] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const [{ data, fetching }] = useSearchPlayerQuery(context);

  if (fetching)
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="loader bg-black p-5 rounded-full flex space-x-3">
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    );

  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const fallBackSrc = "https://cdn.pesmaster.com/players/efootball-2022/0.png";
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="bg-white">
      <header className="p-4 pb-0 border-b shadow-lg bg-gray-100 md:flex md:items-center md:justify-between md:pb-4">
        <div className="mb-4 flex items-center justify-between md:mb-0">
          <h1 className="leading-none text-2xl text-gray-darkest">
            <Link href={`/`} passHref={true}>
              <a className="text-2xl font-extrabold tracking-tight text-gray-900">
                Efootball22 Players Stats Convert
              </a>
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <a
                href="https://github.com/fvitor7"
                target="_blank"
                rel="noreferrer"
                className="block py-2 text-grey-darkest no-underline md:border-none md:p-0 hover:underline"
              >
                Developed by Fábio Vitor
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="max-w-2xl mx-auto py-8 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <Link href={`/`} passHref={true}>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Beta Version
          </h2>
        </Link>

        <div className="flex flex-col md:flex-row mt-10  md:w-full max-w-xl md:space-x-3 space-y-3 md:space-y-0 justify-center">
          <div className=" relative ">
            <input
              type="text"
              id='"form-subscribe-Subscribe'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="PLayer Name"
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <div className=" relative ">
            <input
              type="text"
              id='"form-subscribe-Subscribe'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Team Name"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>
          <div className=" relative ">
            <input
              type="text"
              id='"form-subscribe-Subscribe'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Nation Name"
              onChange={(e) => setNationName(e.target.value)}
            />
          </div>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
            onClick={() => {
              setSearchPlayer(!searchPlayer);
            }}
          >
            Search Player
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.searchPlayer.map((player, key) => (
            <Link
              href={`/player/${encodeURIComponent(player.PlayerID)}`}
              passHref={true}
              key={player.PlayerID}
            >
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    src={player.Image}
                    alt={player.Name} // To fix lint warning
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={player.Image}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        <p className="text-sm font-medium text-gray-900">
                          {player.Name}
                        </p>
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {player.TeamName}
                    </p>
                  </div>
                  <p className="mt-0 text-sm text-gray-500">{player.Nation}</p>
                  <p className="mt-0 text-sm text-gray-500">
                    {player.Position}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
