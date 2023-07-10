import { FaCalendar, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa";

import FaUpRightFromSquare from "../assets/FaUpRightFromSquare.svg";
import { Link } from "./Link";
import { formatRelativeDate } from "../utils/formattedDate";

interface PostInfo {
  title: string
  html_url: string
  comments: number
  user: {
    login: string
  }
  created_at: string
}

interface PostInfoProps {
  data: PostInfo
}

export function PostInfo({data}: PostInfoProps) {
  if (data === undefined) {
    return
  }

  return (
    <div className="p-8 w-[54rem] h-[10.5rem] bg-profile rounded-[10px] absolute top-[13rem] left-[calc(50%-54rem/2)]">
      <div className="flex flex-1 items-center justify-between">
        <Link href="/" target="_self">
          <FaChevronLeft />
          VOLTAR
        </Link>

        <Link href={data.html_url} target="blank">
          VER NO GITHUB
          <img src={FaUpRightFromSquare} />
        </Link>
      </div>

      <h1 className="text-2xl text-title mt-5">
        { data.title }
      </h1>

      <div className="flex items-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <FaGithub color="#3A536B" size={18} />
          <span className="text-subtitle">{data.user.login}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendar color="#3A536B" size={18} />
          <span className="text-subtitle">{formatRelativeDate(data.created_at)}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaComment color="#3A536B" size={18} />
          <span className="text-subtitle">{data.comments} comentários</span>
        </div>
      </div>
    </div>
  );
}
