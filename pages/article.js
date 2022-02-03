import { Blog } from "../components";

export default function Article({ articles }) {
  return <Blog articles={articles} />;
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  if (!data) {
    return {
      // notFound: true,
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  //   Random the articles:
  const shuffle = (data) => {
    for (let i = data.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [data[i - 1], data[j]] = [data[j], data[i - 1]];
    }
    return data;
  };

  //   Random & slice six articles for UI:
  const randomData = shuffle(data);
  const articles = randomData.slice(0, 6);

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = data.map((article) => ({
//     params: { id: article.id },
//   }));

//   return { paths, fallback: "blocking" };
// };
