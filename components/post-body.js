export default function PostBody({ content, wide }) {
  const maxWidth = wide ? 'max-w-3xl' : 'max-w-lg';
  return (
    <div className={`${maxWidth} mx-auto py-2 md:py-8 post-content`}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
