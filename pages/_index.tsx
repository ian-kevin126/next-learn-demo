import {GetServerSideProps} from "next";
import Link from "next/link";

// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// interface HomeProps {
//     post: Post;
// }

export default function Home() {
    const posts = [{id: "1"}, {id: "2"}, {id: "3"}]
    return (
        <ul>
            <li>
                <Link href={"/posts"}>
                    <a>切换至 pages/posts/index.tsx</a>
                </Link>
            </li>
            <li>
                <Link href={{
                    pathname: "/posts/[id]",
                    query: {id: "123"}
                }}>
                    <a>切换至 pages/posts/[id].tsx</a>
                </Link>
            </li>
            <li>
                <Link href={{
                    pathname: "/posts/[...date]",
                    query: {date: ["2021", "12", "31"]}
                }}>
                    <a>切换至 pages/posts/[...date].tsx</a>
                </Link>
            </li>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>Post id: {post.id}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </ul>
    );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const post: Post = await res.json();
//
//     return {
//         props: {
//             post,
//         },
//     };
// };