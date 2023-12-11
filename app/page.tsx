import { MuseumMap } from '@/components/museum-map';

export default function Page() {
  const name = 'Arts of the Islamic World, 2nd floor';
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="h-96">
          <MuseumMap locationName={name} />
        </div>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl"></p>
      </div>
      <div className="flex gap-4"></div>
    </section>
  );
}
