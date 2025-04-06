import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/imgs/yigong1.jpg'
  },
  {
    id: 2,
    src: '/imgs/yigong2.jpg'
  },
  {
    id: 3,
    src: '/imgs/yigong3.jpg'
  },
  {
    id: 4,
    src: '/imgs/yigong4.jpg'
  },
  {
    id: 5,
    src: '/imgs/yigong5.jpg'
  },
  {
    id: 6,
    src: '/imgs/yigong.jpg'
  }
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image) => (
          <div key={image.id} className="relative group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{image.alt}</h3>
              <p className="mt-1 text-sm text-gray-500">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/events"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
        >
          返回活动页面
        </a>
      </div>
    </div>
  );
} 