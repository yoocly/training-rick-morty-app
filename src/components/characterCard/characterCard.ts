import { createElement } from '../../../utils/createElement';
import './characterCard.css';

export function characterCard() {
  const character = {
    id: 235,
    name: 'Mortytown Loco',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/235.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/235',
    created: '2017-12-30T16:37:07.150Z',
  };

  return createElement('article', {
    className: 'characterCard',
    childElements: [
      createElement('img', { src: character.image }),
      createElement('div', {
        childElements: [
          createElement('p', { innerText: 'test' }),
          createElement('p', { innerText: 'test' }),
        ],
      }),
    ],
  });
}
