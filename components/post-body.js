export default function PostBody({ content }) {
  return (
    <div className="max-w-lg mx-auto py-2 md:py-8 post-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
