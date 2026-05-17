import { Carousel } from './ui/carousel';

const foodItems = [
  {
    image: 'https://scontent.cdninstagram.com/v/t39.30808-6/499247570_1176954047807767_2367083234112264816_n.jpg?stp=c0.64.1536.1920a_cp6_dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzYzNTI2MDUyNjc1Mzk2MDQzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE1MzZ4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=AS7-idb3TcYQ7kNvwF10xf2&_nc_oc=AdnhiKRVsTckXH2b3goYeY8k1tNWy5Nx_BfvCYlYHayBOvw6G8MldYU1u6A8ZdD0IZw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=A8pr8ToRzZjCj3YIrsvdSQ&oh=00_Afi9DDL15kKxf3lom9EaAqnBL3hEDoDqiMVzfv4E4d7Zzg&oe=692A42DD&cs=tinysrgb&w=400',
    caption: 'Gourmet Burgers',
  },
  {
    image: 'https://scontent.cdninstagram.com/v/t39.30808-6/576454769_1331599999009837_4623479931538735110_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzc1OTg5MTUyMDYyODQzMjc0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0E8N8_gVBBsQ7kNvwEBfhKN&_nc_oc=Adk1p19cPZYU0v-_m3qpYIQlasxst22o9X-yMRGqDDBV-N4zGkQlFSKdzdxC7JVHr9k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Dubte7z_e4nDsqIRRqRLAw&oh=00_AfiOMg_8MywUu1b24yqvXJCDTyVYfvkLUr2nheSj876VWg&oe=692A4683&cs=tinysrgb&w=400',
    caption: 'Pastas',
  },
  {
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Artisan Coffee',
  },
  {
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Delicious Pasta',
  },
  {
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Decadent Desserts',
  },
  {
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Fresh Breakfast',
  },
  {
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Signature Drinks',
  },
  {
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Hearty Sandwiches',
  },
];
export default function FoodCarousel() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl font-serif font-bold text-center text-neutral-900 mb-4">
          Our Signature Dishes
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto">
          Experience a culinary journey through our carefully crafted menu
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Carousel autoplay={true} interval={4000}>
          {foodItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-8">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="aspect-square w-full max-w-md object-cover mx-auto"
                />
              </div>
              <p className="mt-6 text-2xl font-medium text-neutral-800 text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}