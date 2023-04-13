import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';





export const useGetStarWarsCharacters = routeLoader$(async () =>{
  const response = await fetch ('https://swapi.dev/api/people/')
  const data =await response.json()
  return data.results
  
})
export default component$(() => {
  const characters = useGetStarWarsCharacters()
  return (
    <>

      <div class="bg-slate-400 p-6">
        <h2>hi</h2>
      {characters.value.map((character:any) => (

        <li class="text-xl" key={character.id}>{character.name}</li>
      ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
