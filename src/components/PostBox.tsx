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
      href={`/post/${data.number}`} 
      className="w-[26rem] h-[16.25rem] p-8 bg-post rounded-[10px] max-md:w-[20rem]"
    >
      <div className="flex items-start justify-between max-sm:flex-col max-sm:gap-1">
        <h1 className="w-64 text-xl font-bold text-title max-md:text-sm">
          {data.title}
        </h1>
        <span className="text-sm text-span leading-snug mt-[5px] max-md:text-xs">
          {formatRelativeDate(data.created_at)}
        </span>
      </div>

      <p className="mt-5 text-text max-md:text-sm">
        {data.body.slice(0, 151)}...
      </p>
    </a>
  );
}
