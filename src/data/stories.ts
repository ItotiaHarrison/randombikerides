import { BikeStory } from '../types';

export const bikeStories: BikeStory[] = [
  {
    id: '1',
    title: 'Sunset Ridge Trail Adventure',
    date: 'June 15, 2023',
    location: 'Blue Mountain Range, Colorado',
    description: 'An epic journey through the rugged terrain of Blue Mountain with breathtaking views and challenging descents.',
    coverImage: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2458400/pexels-photo-2458400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10807606/pexels-photo-10807606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    content: 'I started my journey at dawn, with the first light breaking over the eastern ridge. The trail began with a moderate climb through pine forests before opening up to reveal the spectacular valley below. The descent featured some technical sections with loose rocks and a few drop-offs that really tested my skills. Made friends with a fellow rider who showed me a hidden viewpoint just off the main trail. The day ended with a sunset ride back to the trailhead, with golden light filtering through the trees. Definitely one of my top five rides ever!',
    distance: 28,
    elevation: 1250,
    duration: '4h 30m'
  },
  {
    id: '2',
    title: 'Rainforest Canopy Ride',
    date: 'August 3, 2023',
    location: 'Emerald Valley, Washington',
    description: 'A wet and wild adventure through lush rainforest trails with moss-covered bridges and natural water features.',
    coverImage: 'https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/3888058/pexels-photo-3888058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5240511/pexels-photo-5240511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    content: 'This ride was all about embracing the elements! Rain had been falling steadily for days, creating a mystical atmosphere in the forest. The trails were slick and challenging, with roots and rocks testing my balance at every turn. Several stream crossings were higher than usual, adding an extra dimension of adventure. Despite being soaked to the bone within minutes, the beauty of the emerald moss and ferns glistening with raindrops made it all worthwhile. The highlight was discovering a hidden waterfall about halfway through the route, where I stopped for lunch and to wring out my socks!',
    distance: 18,
    elevation: 800,
    duration: '3h 15m'
  },
  {
    id: '3',
    title: 'Desert Mesa Expedition',
    date: 'October 12, 2023',
    location: 'Red Rock Canyon, Utah',
    description: 'An otherworldly ride across red sandstone formations and ancient dried riverbeds under a blazing sun.',
    coverImage: 'https://images.pexels.com/photos/163407/bike-mountain-mountain-biking-trail-163407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/17784661/pexels-photo-17784661/free-photo-of-cyclist-riding-mountain-bike-in-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/14287586/pexels-photo-14287586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    content: 'The desert has a beauty all its own, especially from the saddle of a mountain bike. This route took me through some of the most picturesque sandstone formations in the Southwest. Started early to beat the heat, but by midday, temperatures were soaring above 95°F. The terrain was a mix of slickrock, sandy washes, and surprisingly technical descents. Had to navigate carefully around cacti and other desert plants that seemed determined to puncture my tires! Carried extra water which turned out to be a lifesaver. The vastness of the landscape and the silence broken only by the sound of my tires on the rock made for an almost spiritual experience.',
    distance: 25,
    elevation: 650,
    duration: '5h 00m'
  }
];