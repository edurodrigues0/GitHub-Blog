import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { PostBox } from "../components/PostBox";
import { Profile } from "../components/Profile";
import { api } from "../lib/api";

interface Post {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

type PostFiltered = Post | undefined;

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchPost, setSearchPost] = useState('')
  const [postsFiltered, setPostsFiltered] = useState<PostFiltered[]>([])

  useEffect(() => {
    api.get("/repos/edurodrigues0/GitHub-Blog/issues").then((response) => {
      setPosts(response.data)
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchPost.toLowerCase())
    )

    setPostsFiltered(filteredPosts)
  }, [searchPost, posts])

  return (
    <div className="m-auto max-w-[1920px] pb-60">
      <Header />
      <Profile />
      
      {/*iNPUT*/}
      <div className="w-[54rem] mx-auto mt-[12.25rem] max-sm:w-full max-md:w-full max-md:px-8 max-sm: px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-subtitle font-bold text-lg max-md:text-base">Publicações</h2>
          <span className="text-span text-xs">
            {postsFiltered ? postsFiltered.length : posts.length} publicações
          </span>
        </div>

        <input
          type="text"
          className="bg-input w-full px-4 py-3 mt-6 text-text rounded-md border-[1px] border-label focus:outline-none focus:ring focus:ring-blue placeholder:text-label max-md:placeholder:text-sm"
          placeholder="Buscar conteúdo"
          onChange={e => setSearchPost(e.currentTarget.value)}
        />
      </div>

      {/*POSTS*/}
      <main 
        className="
          w-[54rem] 
          mx-auto 
          flex 
          items-center 
          flex-wrap 
          gap-8 
          mt-12 
          max-md:flex-col
          max-md:w-full
        "
      >
        {postsFiltered ? (
          postsFiltered.map((post) => {
            if (!post) {
              return
            }

            return (
              <PostBox
                key={post.id}
                data={post}
              />
            )
          })
        ) : (
          posts.map((post) => {
            return (
              <PostBox
                key={post.id}
                data={post}
              />
            )
          })
        )}
      </main>
    </div>
  );
}
