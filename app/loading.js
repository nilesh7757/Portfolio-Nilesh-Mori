export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary animate-spin"></span>
      </div>
    </div>
  );
}
