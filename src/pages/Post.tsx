import { useEffect, useState } from "react";

import { ArticleContent } from "../components/ArticleContent";
import { Header } from "../components/Header";
import { PostInfo } from "../components/PostInfo";
import { api } from "../lib/api";
import { useParams } from "react-router-dom";

interface Issue {
  title: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
  created_at: string;
  body: string;
}

export function Post() {
  const { issueNumber } = useParams();
  const [issuePost, setIssuePost] = useState<Issue>();

  useEffect(() => {
    api
      .get(`/repos/edurodrigues0/GitHub-Blog/issues/${issueNumber}`)
      .then((response) => {
        setIssuePost(response.data);
        console.log(response.data);
      });
  }, [issueNumber]);

  if (!issuePost) {
    return;
  }

  return (
    <div className="m-auto max-w-[1920px] pb-60">
      <Header />
      <PostInfo data={issuePost} />
      <ArticleContent children={issuePost.body} />
    </div>
  );
}
