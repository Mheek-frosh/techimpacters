"use client";

const WatchOurStory = () => {
  // Code.org "What Most Schools Don't Teach" - relevant tech education video
  const videoId = "nKIu9yen5nc";

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">Story</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            See how we&apos;re transforming education and empowering the next generation through technology.
          </p>
          <p className="text-gray-400 max-w-xl mx-auto">
            This video captures why tech education matters—and why organizations like Techimpacters exist to bridge the digital divide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
          <div className="aspect-video bg-gray-800">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Techimpacters - Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchOurStory;
