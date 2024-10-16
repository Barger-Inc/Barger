type MediaPreviewProps = {
  id: number
}

export const MediaPreview = (props: MediaPreviewProps) => {
  return (
    <div>
      <h2>MediaPreview — id: {props.id}</h2>
    </div>
  )
}
