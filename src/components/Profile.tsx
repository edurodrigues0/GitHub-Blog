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
    <div className="flex items-center gap-8 w-[54rem] h-[13.25rem] bg-profile rounded-[10px] absolute top-[13rem] left-[calc(50%-54rem/2)] pl-10 p-8">
      <img
        src={profileInfo?.avatar_url}
        className="h-[9.25rem] w-[9.25rem] rounded-lg"
      />
      <div>
        <div className="flex flex-1 justify-between items-start">
          <h1 className="text-title font-bold text-2xl">
            {profileInfo?.name}
          </h1>

          <Link href={profileInfo?.html_url} target="blank">
            GITHUB
            <img src={FaUpRightFromSquare} />
          </Link>
        </div>

        <p className="text-text">
          {profileInfo?.bio}
        </p>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <FaGithub color="#3A536B" size={18} />
            <span className="text-subtitle">{profileInfo?.login}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBuilding color="#3A536B" size={18} />
            <span className="text-subtitle">{profileInfo?.company || 'Sem empresa'}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUsers color="#3A536B" size={18} />
            <span className="text-subtitle">{profileInfo?.followers} seguidores</span>
          </div>
        </div>
      </div>
    </div>
  );
}
