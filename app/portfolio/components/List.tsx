import Post from "./Post";

function List() {
  return (
    <div className="flex flex-col sm:px-10 px-5 my-20 gap-5">
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default List;
