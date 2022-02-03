import { Single } from "../components";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "start",
};

const Blog = ({ articles }) => {
  return (
    <div style={styles}>
      {articles &&
        articles.map((article, index) => (
          <div key={index}>
            <Single article={article} />
          </div>
        ))}
    </div>
  );
};

export default Blog;
