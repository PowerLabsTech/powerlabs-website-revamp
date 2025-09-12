import { pathsRoute } from '@/app/routes';
import Image from 'next/image';

export default function PodcastBanner() {
  return (
    <>
      <div
        className="relative w-full bg-no-repeat bg-center flex items-center justify-center px-4 py-20 text-center"
        style={{
          backgroundImage:
            "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spiral.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full max-w-2xl text-white space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-[40px] font-medium metallic-text">
              Catch up on all episodes of The Blue Couch Podcast
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <a
              href="https://open.spotify.com/show/3xNMUpryzRbHttHcVTXc2W?si=9fe06455d7794db9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spotifyIcon.png"
                width={80}
                height={80}
                alt="Spotify icon"
                className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              />
            </a>
            <a
              href="https://music.amazon.com/podcasts/34be269e-3433-4c6f-aabb-e93765cff874/the-blue-couch-podcast-by-powerlabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/amazonIcon.png"
                width={80}
                height={80}
                alt="Amazon Music icon"
                className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              />
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/the-blue-couch-podcast-by-powerlabs/id1827465597"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/appleIcon.svg"
                width={80}
                height={80}
                alt="Apple Music icon"
                className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              />
            </a>
            <a
              href="https://music.youtube.com/playlist?list=PLqZtFLpUM--EpmV6HrbhllpYyojgKNNjB&si=I1aogD25auTDRmZg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/youtubeIcon.svg"
                width={80}
                height={80}
                alt="YouTube icon"
                className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              />
            </a>
            <a
              href="https://audiomack.com/thebluecouchpodcast"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/audiomackIcon.png"
                width={80}
                height={80}
                alt="Audiomack icon"
                className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              />
            </a>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-xs max-w-md">
              *This information may be transcribed, used, and stored by third
              parties in accordance with our{' '}
              <a
                href={pathsRoute.privacyPolicy}
                className="underline decoration-solid text-blue-500 decoration-blue-500 italic"
              >
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
