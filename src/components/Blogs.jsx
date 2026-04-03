import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"]{
      _id,
      title,
      slug,
      body,
      publishedAt,
      "authorName": author->name,
      "imageUrl": mainImage.asset->url
    }`)
    .then((data) => setPosts(data))
    .catch(console.error);
  }, []);
console.log(posts);
  return (
    <div>
      <h1>Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {posts.map((post) => (
                <div key={post._id} className="border border-2 p-6 ">
                <h2>{post.title}</h2> 

                {post.imageUrl && (
                    <img src={post.imageUrl} alt={post.title} width="200" />
                )}
                    <div>
                    <div>{post.body.map((paragraph) => (
                    <div key={paragraph._key}>{paragraph.children.map((child) => child.text).join("")}</div>
                    ))}</div>
                </div>
                </div>
            ))}

        </div> 
    </div>
  );
};

export default Blogs;