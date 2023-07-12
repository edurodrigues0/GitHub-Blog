import { FaBuilding, FaGithub, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

import FaUpRightFromSquare from "../assets/FaUpRightFromSquare.svg";
import { Link } from "./Link";
import { api } from "../lib/api";

interface ProfileProps {
  name: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  company: string
  followers: number
}

export function Profile() {
  const [profileInfo, setProfileInfo] = useState<ProfileProps>()

  useEffect(() => {
    api.get("/users/edurodrigues0").then(response => {

      setProfileInfo(response.data)
    })
  }, [])

  return (
    <div 
      className="flex items-center gap-8 w-[54rem] h-[13.25rem] bg-profile rounded-[10px] absolute top-[13rem] left-[calc(50%-54rem/2)] pl-10 p-8 max-md:w-[35rem] max-md:left-[calc(50%-35rem/2)] max-sm:w-full max-sm:px-4 max-sm:left-0 max-sm:gap-4 max-sm:rounded-none"
    >
      <img
        src={profileInfo?.avatar_url}
        className="h-[9.25rem] w-[9.25rem] rounded-lg max-md:h-28 max-sm:w-26 max-sm:h-26 max-sm:rounded-md"
      />
      <div className="w-full">
        <div className="flex justify-between items-start">
          <h1 className="text-title font-bold text-2xl max-md:text-base max-sm:text-sm">
            {profileInfo?.name}
          </h1>

          <Link href={profileInfo?.html_url} target="blank">
            GITHUB
            <img className="max-sm:h-3" src={FaUpRightFromSquare} />
          </Link>
        </div>

        <p className="text-text max-md:text-sm max-sm:hidden">
          {profileInfo?.bio}
        </p>

        <div className="flex items-center gap-6 mt-6 max-sm:gap-4 max-sm:flex-col max-sm:items-start max-sm:mt-3">
          <div className="flex items-center gap-2 max-sm:gap-1">
            <FaGithub className="max-sm:h-3" color="#3A536B" size={18} />
            <span className="text-subtitle max-md:text-xs">{profileInfo?.login}</span>
          </div>

          <div className="flex items-center gap-2 max-sm:gap-1">
            <FaBuilding className="max-sm:h-3" color="#3A536B" size={18} />
            <span className="text-subtitle max-md:text-xs">{profileInfo?.company || 'Sem empresa'}</span>
          </div>

          <div className="flex items-center gap-2 max-sm:gap-1">
            <FaUsers className="max-sm:h-3" color="#3A536B" size={18} />
            <span className="text-subtitle max-md:text-xs">{profileInfo?.followers} seguidores</span>
          </div>
        </div>
      </div>
    </div>
  );
}
