const LikeButton = () => {
  const [isLike, setIsLike] = React.useState(false)
  if (isLike) {
    return "You liked this.";
  }
  return (
    <button onClick={() => setIsLike(true)}>Like x</button>
  );
}

const domContainer = document.querySelector("#react-app");
ReactDOM.render(React.createElement(LikeButton), domContainer);
