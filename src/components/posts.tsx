// import { getSortedPostsData } from "@/lib/posts"
// import Link from "next/link"

// type Props = {
//   post: BlogPost
// }

// function getFormattedDate(dateString: string): string {
//   return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
// }


// function ListItem({ post }: Props) {
//   const { id, title, date } = post
//   const formattedDate = getFormattedDate(date)

//   return (
//     <li className="mt-4 text-2xl dark:text-white/90">
//       <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
//       <br />
//       <p className="text-sm mt-1">{formattedDate}</p>
//     </li>
//   )
// }

// export default function Posts() {
//   const posts = getSortedPostsData()

//   return (
//     <section className="mt-6 mx-auto max-w-2xl">
//       <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
//       <ul className="w-full">
//         {posts.map(post => (
//           <ListItem key={post.id} post={post} />
//         ))}
//       </ul>
//     </section>
//   )
// }