import { formatRelativeDate } from "../utils/formattedDate"

interface Post {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

interface PostBoxProps {
  data: Post
}

export function PostBox({ data }: PostBoxProps) {
  return (
    <a 
      href={`http://localhost:5173/post/${data.number}`} 
      className="w-[26rem] h-[16.25rem] p-8 bg-post rounded-[10px]"
    >
      <div className="flex items-start justify-between">
        <h1 className="w-64 text-xl font-bold text-title">
          {data.title}
        </h1>
        <span className="text-sm text-span leading-snug mt-[5px]">
          {formatRelativeDate(data.created_at)}
        </span>
      </div>

      <p className="mt-5 text-text">
        {data.body.slice(0, 151)}...
      </p>
    </a>
  );
}
