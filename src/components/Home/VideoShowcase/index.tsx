import { VideoCard } from './VideoCard'

const videos = [
  {
    title: 'DevFest 2024 Highlights',
    thumbnail: 'https://www.devfestnagpur.in/img/past-devfest/image-1.png',
    videoUrl: 'https://youtu.be/7SFiL81-_Ck',
    duration: '3:45',
  },
  {
    title: 'Cloud Workshop Series',
    thumbnail: 'https://storage.googleapis.com/gweb-cloudblog-publish/original_images/BlogHeader_Set2_D_ShTJD99.png',
    videoUrl: 'https://youtu.be/CQC8fUnVQ9c?list=PLimnc3HV--H3d7qcBvnDd_G2_NW-yoDpR',
    duration: '2:30',
  },
]

export function VideoShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Event Highlights
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Catch up on our recent events and activities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}