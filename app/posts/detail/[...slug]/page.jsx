const DetailPost = ({ params }) => {
  const data = params.slug.map((param) => {
    return `${param} `;
  });

  return (
    <>
      <h1>Detai Post</h1>
      <p>
        Params: { data }
      </p>
    </>
  );
}

export default DetailPost;
