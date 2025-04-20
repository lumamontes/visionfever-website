import clsx from 'clsx';
import { 
  FaPaintBrush, 
  FaLaptopCode, 
  FaFilm, 
  FaCamera, 
  FaVideo, 
  FaPalette, 
  FaMusic 
} from 'react-icons/fa';

// Helper function to get the right icon based on type
const getIconByType = (type: string, size: number = 32) => {
  switch (type.toLowerCase()) {
    case 'traditional':
      return <FaPaintBrush size={size} />;
    case 'digital':
      return <FaLaptopCode size={size} />;
    case 'animation':
      return <FaFilm size={size} />;
    case 'photography':
      return <FaCamera size={size} />;
    case 'videography':
      return <FaVideo size={size} />;
    case 'mua':
      return <FaPalette size={size} />;
    case 'music':
      return <FaMusic size={size} />;
    default:
      return <FaPaintBrush size={size} />;
  }
};

export function GridTileImage({
  isInteractive = true,
  label,
  colorIndex = 0, // Not needed anymore for this design but keeping it for future flexibility
  ...props
}: {
  isInteractive?: boolean;
  colorIndex?: number;
  label?: {
    title: string;
    subtitle?: string; // New: optional small text (like 'founder', 'socials')
    position?: 'bottom' | 'center'; // if needed later
  };
}) {
  return (
    <div
      className={clsx(
        'group relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 p-4 transition-all duration-300',
        {
          'cursor-pointer hover:border-b-4 hover:border-b-red-500': isInteractive,
        }
      )}
      {...props}
    >
      {/* Content */}
      <div className="flex flex-row items-center gap-2">
        {/* Big bold title */}
        <h3 className="font-extrabold text-xl text-white">
          {label?.title}
        </h3>

        {/* Sparkle separator */}
        <span className="text-white text-sm">✦</span>

        {/* Smaller subtitle */}
        <p className="text-sm text-white opacity-80">
          {label?.subtitle || ''}
        </p>
      </div>
    </div>
  );
}
