import ImagesShow from '@/components/ImagesShow';

export default async function Home() {
  return (
    <>
      <header>
        <ImagesShow />
      </header>
      <main className='flex flex-col m-auto py-8 px-4'>
        <article className='text-8xl text-center text-accent-300 pb-8'>
          <h1>You are wellcome to Balkana</h1>
        </article>

        <section className='flex flex-col m-auto py-8 px-4  text-primary-300'>
          <h2 className='text-center text-6xl  m-8'>Goal</h2>
          <blockquote className='block italic text-xl text-right text-accent-300'>
            &apos;Discipline is the bridge between goals and
            accomplishment.&apos;
            <cite> (Eliud Kipchoge)</cite>
          </blockquote>
          <p className='text-justify text-2xl m-4 pb-8 border-b-2'>
            Our Goal is to preserve and maintain traditional paths, tracks,
            routes in the mountain. Specifically, in the Centre Stara Planina
            area. Our Goal is to preserve and maintain traditional paths,tracks,
            routes in the mountain. Specifically, in the Centre Stara Planina
            area. Our Goal is to preserve and maintain traditional paths,tracks,
            routes in the mountain. Specifically, in the Centre Stara Planina
            area.
          </p>
        </section>
        <section className='flex flex-col m-auto py-8 px-4  text-primary-300'>
          <h2 className='text-center text-6xl  m-8'>Activities</h2>
          <blockquote className='block italic text-xl text-right text-accent-300'>
            &apos;We are what we repeatedly do. Excellence, then, is not an act,
            but a habit.&apos;
            <cite> (Aristotel)</cite>
          </blockquote>
          <p className='text-justify text-2xl m-4 pb-8 border-b-2'>
            We orginise and support outdoor activities in the area. Activities
            as: mountain running and mountain cycling events, preserving
            traditional paths, and volunteering. For example, you can see
            TryavnaTour24 and Mahnatite skali RUN events. We orginise and
            support outdoor activities in the area. Activities as: mountain
            running and mountain cycling events, preserving traditional paths,
            and volunteering. For example, you can see TryavnaTour24 and
            Mahnatite skali RUN events.
          </p>
        </section>
        <section className='flex flex-col m-auto py-8 px-4  text-primary-300'>
          <h2 className='text-center text-6xl  m-8'>Projects</h2>
          <blockquote className='block italic text-xl text-right text-accent-300'>
            &apos;Winning means surpassing yourself and turning your dreams into
            reality.&apos;
            <cite> (Kilian Jornet)</cite>
          </blockquote>
          <p className='text-justify text-2xl m-4 pb-8 border-b-2'>
            Our projects are projects for life. We are very close to the nature,
            learn to co-exist. We try to inhabit the wild without polluting and
            without causing harm. We are very close to the nature, learn to
            co-exist. We try to inhabit the wild without polluting and without
            causing harm.
          </p>
        </section>
      </main>
    </>
  );
}
