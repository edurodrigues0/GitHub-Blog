import { Header } from "../components/Header";

export function NotFound() {
  return (
    <div className="m-auto max-w-[1920px] h-screen bg-background pb-60">
      <Header/>
      <div className="flex flex-col items-center justify-center gap-16">
        <h1 className="text-5xl text-text mt-32">
          Ops: 404 Page Not Found
        </h1>
        <a 
          href="/"
          className="text-text hover:underline hover:text-gray-200"
        >
          Return to home
        </a>
      </div>
    </div>
  )
}