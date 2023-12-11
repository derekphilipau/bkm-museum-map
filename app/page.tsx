import { MuseumMap } from '@/components/museum-map';

export default function Page() {
  const item = {
    museumLocation: {
      name: 'Arts of the Islamic World, 2nd floor',
    },
  };
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Museum Map Component
        </h1>
        <div className="h-80">
          <MuseumMap item={item} />
        </div>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl"></p>
      </div>
      <div className="flex gap-4"></div>
    </section>
  );
}
