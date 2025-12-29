import type { Metadata } from 'next';
import Mp4ToMkvTool from './components/Mp4ToMkvTool';

export const metadata: Metadata = {
  title: 'MP4 to MKV Converter — Convert MP4 Videos to MKV Format',
  description: 'Learn how to convert MP4 videos to MKV format. Comprehensive guide with recommended tools and conversion methods.',
  keywords: 'MP4 to MKV, video converter, MKV converter, convert MP4, video format conversion',
};

const featurePillars = [
  { title: 'Multiple tracks', description: 'MKV supports multiple audio tracks, subtitles, and chapter markers in a single file.' },
  { title: 'No quality loss', description: 'Converting MP4 to MKV is a container change only—video and audio quality remain identical.' },
  { title: 'Better metadata', description: 'MKV offers superior metadata support for organizing large video libraries.' },
];

const seoContent = [
  {
    title: 'Why convert MP4 to MKV',
    body: [
      'MP4 and MKV are both container formats that hold video, audio, and subtitle streams. MP4 is more widely compatible but has limitations. MKV offers advanced features like multiple audio tracks, extensive subtitle support, and chapter markers. These features make MKV ideal for archiving movies, TV shows, and personal video collections.',
      'The primary reason to convert MP4 to MKV is to add multiple audio tracks or subtitle files. MP4 technically supports multiple tracks but many players and devices handle them poorly. MKV was designed from the ground up for multiple tracks, making it the preferred format for multilingual content.',
      'Video quality remains identical during MP4 to MKV conversion because you are changing the container, not re-encoding the video. The video and audio streams are simply extracted from the MP4 container and placed into an MKV container. This process is fast and lossless.',
      'Media enthusiasts prefer MKV for its flexibility and open-source nature. Unlike MP4, which has patent and licensing restrictions, MKV is completely free and open. This openness has led to excellent software support and continuous format improvements.',
      'Large video libraries benefit from MKV\'s superior metadata capabilities. You can embed detailed information about movies, including cast, crew, plot summaries, and cover art. This metadata makes organizing and browsing large collections much easier.',
    ],
  },
  {
    title: 'Understanding MP4 and MKV differences',
    body: [
      'MP4 (MPEG-4 Part 14) is the most widely compatible video container format. Every device, browser, and media player supports MP4. This universal compatibility makes MP4 the default choice for sharing videos online and playing them on mobile devices.',
      'MKV (Matroska Video) prioritizes features over compatibility. The format supports virtually unlimited video, audio, and subtitle tracks. You can have multiple language audio tracks, forced subtitles, commentary tracks, and more—all in a single file.',
      'Compatibility represents the key practical difference. MP4 plays everywhere without additional software. MKV requires VLC, MPC-HC, or other advanced media players. Smart TVs and streaming devices have mixed MKV support, though modern devices handle it well.',
      'File size is typically similar between formats when containing the same content. The container overhead is negligible compared to the actual video and audio data. Any size difference comes from different encoding settings, not the container format itself.',
      'Streaming services universally use MP4 because of its compatibility and streaming-friendly structure. MKV is primarily used for personal video collections, archiving, and situations where advanced features outweigh compatibility concerns.',
    ],
  },
  {
    title: 'Common MP4 to MKV conversion scenarios',
    body: [
      'Movie collectors convert MP4 files to MKV to add multiple audio tracks and subtitles. A single MKV file can contain English audio, Spanish audio, French audio, plus subtitles in a dozen languages. This consolidation eliminates the need for separate files for each language version.',
      'Anime fans frequently use [MP4 to MKV] conversion to combine video with multiple subtitle tracks. Anime often has multiple subtitle versions—literal translations, localized translations, and honorific-preserving translations. MKV allows all versions in one file.',
      'Home video archivists convert family videos to MKV for long-term storage. The format\'s chapter markers make navigating long videos easier. You can mark birthdays, holidays, and special events as chapters, creating a more organized archive.',
      'Content creators preparing videos for distribution convert to MKV when they need to include multiple audio commentary tracks. Directors\' commentary, cast commentary, and technical commentary can all exist in a single file.',
      'Video editors working with multi-camera footage use MKV to keep all camera angles in one file. Each camera angle becomes a separate video track, simplifying the editing workflow and keeping related content together.',
    ],
  },
  {
    title: 'Tools and methods for conversion',
    body: [
      'FFmpeg is the most powerful command-line tool for video conversion. The command "ffmpeg -i input.mp4 -c copy output.mkv" converts MP4 to MKV without re-encoding, preserving perfect quality. This method is fast because it only changes the container.',
      'HandBrake provides a user-friendly graphical interface for video conversion. The software is free, open-source, and available for Windows, macOS, and Linux. HandBrake makes it easy to add subtitle tracks and configure audio settings during conversion.',
      'VLC Media Player, primarily known as a video player, also converts formats. Open your MP4 file, choose "Convert/Save" from the Media menu, select MKV as the output format, and start the conversion. VLC is convenient because most people already have it installed.',
      'MKVToolNix specializes in creating and editing MKV files. The software excels at adding multiple audio tracks, subtitle files, and chapter markers. MKVToolNix is the professional choice for creating feature-rich MKV files.',
      'Online converters exist but are not recommended for video files. Video files are large, making upload and download times impractical. Privacy concerns also arise when uploading personal videos to third-party servers. Desktop software is faster and more private.',
    ],
  },
];

const faqs = [
  { question: 'Does converting MP4 to MKV reduce quality?', answer: 'No. When done correctly (without re-encoding), conversion is lossless. The video and audio streams are simply moved to a new container.' },
  { question: 'Will MKV files play on my TV?', answer: 'Most modern smart TVs support MKV. Older TVs may not. Check your TV\'s specifications or test with a small file first.' },
  { question: 'Can I convert MKV back to MP4?', answer: 'Yes, the process works in reverse. Use the same tools (FFmpeg, HandBrake, VLC) to convert MKV back to MP4.' },
  { question: 'Why can\'t browsers convert video formats?', answer: 'Video conversion requires significant processing power and large file handling. Browsers are not designed for these intensive operations. Desktop software is necessary.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">MP4 to MKV</a>
            <p className="text-sm text-slate-400">Convert MP4 videos to MKV format</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <Mp4ToMkvTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[MP4 to MKV\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[MP4 to MKV]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/mp4-to-mkv" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">MP4 to MKV</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>Information guide for video format conversion. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
