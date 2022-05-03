import React, { useEffect, useMemo, useState } from "react";
import { useSearchPlayerQuery } from "../../graphql";
import Pill from "../Pill";
import Image from "next/image";
import { ImageError } from "next/dist/server/image-optimizer";
import Link from "next/link";
const Cars: React.FC = (props) => {
  const context = useMemo(
    () => ({ variables: { TeamName: "", PlayerName: "" } }),
    []
  );
  const [{ data, fetching }] = useSearchPlayerQuery(context);
  if (fetching) return <div>Loading</div>;
  if (data?.searchPlayer.length === 0) return <div>No Players yet</div>;

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
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Efootball Players
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.searchPlayer.map((player, key) => (
            <Link href={`/player/${encodeURIComponent(player.PlayerID)}`} passHref={true} key={player.PlayerID}>
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
