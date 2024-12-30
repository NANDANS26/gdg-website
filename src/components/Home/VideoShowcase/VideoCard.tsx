interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export function VideoCard({ title, thumbnail, videoUrl, duration }: VideoCardProps) {
  return (
    <div
      className="relative rounded-lg overflow-hidden group"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 text-gray-900 px-4 py-2 rounded-full hover:bg-white transition-colors"
        >
          Watch Now
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-semibold">{title}</h3>
        <span className="text-white/80 text-sm">{duration}</span>
      </div>
    </div>
  )
}