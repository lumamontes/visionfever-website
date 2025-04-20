import clsx from 'clsx';

export function GridTileImage({
  isInteractive = true,
  label,
  ...props
}: {
  isInteractive?: boolean;
  label?: {
    title: string;
    subtitle?: string;
    position?: 'bottom' | 'center';
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
      <div className="flex flex-row items-center gap-2">
        <h3 className="font-extrabold text-xl text-white">
          {label?.title}
        </h3>
        <span className="text-white text-sm">✦</span>
        <p className="text-sm text-white opacity-80">
          {label?.subtitle || ''}
        </p>
      </div>
    </div>
  );
}
