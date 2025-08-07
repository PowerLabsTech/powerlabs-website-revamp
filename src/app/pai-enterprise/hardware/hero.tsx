import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Image
          src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/pai_board.png"
          width={420}
          height={270}
          alt="pai_board"
          className="w-full max-w-md"
        />
      </div>
    </>
  );
}
