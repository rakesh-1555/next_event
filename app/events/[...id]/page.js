export default function Events({ params }) {
  return (
    <>
      {" "}
      <h1>The segments of the page:</h1> <pre>{params.id.toString()}</pre>{" "}
    </>
  );
}
