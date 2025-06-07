import clsx from 'clsx';

const Label = ({
  title,
  position = 'bottom'
}: {
  title: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-full border bg-background/70 p-1 text-xs font-semibold text-foreground backdrop-blur-md dark:border-foreground/20 dark:bg-background/70 dark:text-foreground">
        <h3 className="mr-4 line-clamp-2 grow pl-2 leading-none tracking-tight">{title}</h3>
      </div>
    </div>
  );
};

export default Label;