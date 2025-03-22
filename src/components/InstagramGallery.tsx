
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Instagram } from 'lucide-react';

// Instagram posts from Rock Structures
const instagramPosts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
    caption: 'Excavation work for a new commercial development project in Kaysville',
    likes: 67,
    date: '2023-11-15'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
    caption: 'Site preparation work for a residential development',
    likes: 42,
    date: '2023-10-27'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4be?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
    caption: 'Grading and foundation preparation in progress',
    likes: 89,
    date: '2023-10-05'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3',
    caption: 'Excavation work for a custom home foundation',
    likes: 53,
    date: '2023-09-18'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1535554768768-fae927002942?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
    caption: 'Heavy equipment operators at work on a challenging hillside project',
    likes: 75,
    date: '2023-09-02'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1485417967788-876aa11eb02a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3',
    caption: 'Underground utilities installation for a commercial development',
    likes: 61,
    date: '2023-08-15'
  }
];

const InstagramPost = ({ post }: { post: typeof instagramPosts[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-md overflow-hidden image-hover group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={1/1} className="bg-rock-light-gray">
        <img 
          src={post.imageUrl} 
          alt={post.caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </AspectRatio>
      
      <div 
        className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-sm text-center mb-4">{post.caption}</p>
        <div className="flex items-center text-xs">
          <span>❤️ {post.likes}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
};

const InstagramGallery = () => {
  return (
    <section id="instagram" className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-5 w-5 text-rock-brown" />
            <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-rock-brown/10 text-rock-brown">
              @rockstructures
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rock-dark">
            Follow Our Latest Projects
          </h2>
          <p className="text-lg text-rock-gray">
            Check out our Instagram feed to see our excavation and grading projects in action.
            Follow us for regular updates on our latest work.
          </p>
        </div>

        {/* Mobile view: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id}>
                  <InstagramPost post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>

        {/* Desktop view: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 reveal-on-scroll">
          {instagramPosts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/rockstructures"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
