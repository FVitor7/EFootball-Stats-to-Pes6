import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useLegacyPlayerStatsQuery } from "../../graphql";
import Link from "next/link";
import { Radar } from "react-chartjs-2";

const Player: React.FC = (props) => {
  const router = useRouter();
  const { player } = router.query;

  const context = useMemo(
    () => ({ variables: { PlayerID: player as string } }),
    [player]
  );

  const [{ data, fetching }] = useLegacyPlayerStatsQuery(context);

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

  if (data?.legacyPlayerStats.length === 0) return <div>No Players yet</div>;

  function calculateStatForHexagon(stat: number) {
    let convertedStat = 0;
    if (stat <= 39) {
      convertedStat = stat * 0.5;
    } else if (stat >= 40 && stat <= 64) {
      convertedStat = (stat - 39) * 0.8 + 20;
    } else if (stat >= 65 && stat <= 68) {
      convertedStat = (stat - 65) * 2 + 42;
    } else if (stat >= 69 && stat <= 79) {
      convertedStat = stat - 19;
    } else if (stat >= 80 && stat <= 89) {
      convertedStat = (stat - 80) * 2 + 62;
    } else if (stat >= 90 && stat <= 99) {
      convertedStat = (stat - 90) * 2 + 82;
    }
    return convertedStat;
  }

  const RadarData = {
    labels: ["ATQ", "TEC", "RES", "DEF", "FOR", "VCD"],
    datasets: [
      {
        data: [
          data?.legacyPlayerStats?.[0].Attack,
          data?.legacyPlayerStats?.[0].Technique,
          data?.legacyPlayerStats?.[0].Stamina,
          data?.legacyPlayerStats?.[0].Defence,
          data?.legacyPlayerStats?.[0].Balance,
          data?.legacyPlayerStats?.[0].Acceleration,
        ].map(function (stat) {
          return calculateStatForHexagon(stat as number);
        }),
        borderColor: ["rgb(253,182,180)"],
        borderWidth: 3,
        pointRadius: 0,
      },
      {
        data: [20, 20, 20, 20, 20, 20],
        backgroundColor: "#424242",
        pointRadius: 0,
      },
      {
        data: [40, 40, 40, 40, 40, 40],
        backgroundColor: "#5e5e5e",
        pointRadius: 0,
      },
      {
        data: [60, 60, 60, 60, 60, 60],
        backgroundColor: "#424242",
        pointRadius: 0,
      },
      {
        data: [80, 80, 80, 80, 80, 80],
        backgroundColor: "#5e5e5e",
        pointRadius: 0,
      },
      {
        data: [100, 100, 100, 100, 100, 100],
        backgroundColor: "#424242",
        pointRadius: 0,
      },
    ],
  };
  const RadarOptions = {
    scale: {
      ticks: {
        display: false,
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20,
      },
      pointLabels: {
        fontSize: 12,
      },
    },
    legend: {
      display: false,
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return data ? (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Link href={`/`} passHref={true}>
              <a className="text-xl text-indigo-600 font-semibold tracking-wide uppercase">
                Efootball Player Stats
              </a>
            </Link>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {data?.legacyPlayerStats?.[0].Name}
            </p>
            <Image
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              src={data?.legacyPlayerStats?.[0].Image}
              alt={data?.legacyPlayerStats?.[0].Name} // To fix lint warning
              width={180}
              height={180}
            />
            <div className="flex justify-center items-center">
              <div className="W-96">
                <Radar data={RadarData} options={RadarOptions} />
              </div>
            </div>

            <div className="mt-10">
              <dl className="space-y-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-0">
                <div className="relative">
                  <p className="mt-1 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Nationality: {data?.legacyPlayerStats?.[0].Nationality}
                  </p>
                </div>
                <div className="relative">
                  <p className="mt-1 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Positions: {data?.legacyPlayerStats?.[0].Positions}
                  </p>
                </div>
                <div className="relative">
                  <p className="mt-1 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Registred Positions:{" "}
                    <span className="text-yellow-500">★</span>
                    {data?.legacyPlayerStats?.[0].RegistredPosition}
                  </p>
                </div>
                <div className="relative">
                  <p className="mt-1 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Age: {data?.legacyPlayerStats?.[0].Age}
                  </p>
                </div>
                <div className="relative">
                  <p className="mt-1 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Height: {data?.legacyPlayerStats?.[0].Height}
                  </p>
                </div>
                <div className="relative">
                  <p className="mt-1 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Weight: {data?.legacyPlayerStats?.[0].Weight}
                  </p>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Stats 01
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Attack: {data?.legacyPlayerStats?.[0].Attack}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Defence: {data?.legacyPlayerStats?.[0].Defence}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Heading: {data?.legacyPlayerStats?.[0].Heading}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Jump: {data?.legacyPlayerStats?.[0].Jump}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Mentality: {data?.legacyPlayerStats?.[0].Mentality}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  GK Skills: {data?.legacyPlayerStats?.[0].GKSkills}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Team work: {data?.legacyPlayerStats?.[0].TeamWork}
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Stats 02
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Shot Accuracy: {data?.legacyPlayerStats?.[0].ShotAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Shot Technique: {data?.legacyPlayerStats?.[0].ShotTechnique}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Shot Power: {data?.legacyPlayerStats?.[0].ShotPower}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Balance: {data?.legacyPlayerStats?.[0].Balance}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Technique: {data?.legacyPlayerStats?.[0].Technique}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Dribble Accuracy:{" "}
                  {data?.legacyPlayerStats?.[0].DribbleAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Dribble Speed: {data?.legacyPlayerStats?.[0].DribbleSpeed}
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Stats 03
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Free Kick Accuracy:{" "}
                  {data?.legacyPlayerStats?.[0].FreeKickAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Swerve: {data?.legacyPlayerStats?.[0].Swerve}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Aggression: {data?.legacyPlayerStats?.[0].Aggression}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Stamina: {data?.legacyPlayerStats?.[0].Stamina}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Speed: {data?.legacyPlayerStats?.[0].Speed}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Acceleration: {data?.legacyPlayerStats?.[0].Acceleration}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Response: {data?.legacyPlayerStats?.[0].Response}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Agility: {data?.legacyPlayerStats?.[0].Agility}
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Stats 04
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Short Pass Accuracy:{" "}
                  {data?.legacyPlayerStats?.[0].ShortPassAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Short Pass Speed:{" "}
                  {data?.legacyPlayerStats?.[0].ShortPassSpeed}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Long Pass Accuracy:{" "}
                  {data?.legacyPlayerStats?.[0].LongPassAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Long Pass Speed: {data?.legacyPlayerStats?.[0].LongPassSpeed}
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Stats 05
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Weak Foot Frequency:{" "}
                  {data?.legacyPlayerStats?.[0].Consistency}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Condition/Fitness:{" "}
                  {data?.legacyPlayerStats?.[0].ConditionFitness}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Weak Foot Accuracy:{" "}
                  {data?.legacyPlayerStats?.[0].WeakFootAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Weak Foot Frequency:{" "}
                  {data?.legacyPlayerStats?.[0].WeakFootAccuracy}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Free Kick Style: 1
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Drop Kick Style: 1
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Dribbling Style: 1
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Penalty Style: 1
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Special Abilities
                  </p>
                </dt>
                {data?.legacyPlayerStats?.[0].SpecialAbilities.split(",").map(
                  (player, key) => (
                    <dd
                      key={key}
                      className="mt-2 ml-16 text-base text-gray-500"
                    >
                      <span className="text-yellow-500">★ </span>
                      {player}
                    </dd>
                  )
                )}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>Player Not Found</>
  );
};

export default Player;
