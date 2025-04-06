import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  image: string;
  link?: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: '2025年理事会全体会议',
    date: '2025年5月4日',
    time: '5:00 PM',
    location: '翠湖海鲜酒楼 19 US-22, Green Brook Township, NJ 08812',
    description: '新泽西华人联合总会、福建同乡会2025理事会全体会议。',
    image: '/imgs/lishihuihuiyi.jpg',
  },
];

const pastEvents = [
    {
        id: 1,
        title: '清明节祭拜华工先辈',
        date: '2025年3月29日',
        location: 'Belleville, NJ',
        image: '/imgs/qingminjie.jpg',
        link: 'https://www.meipian.cn/5c1ddkci?share_depth=1'
      },
      {
        id: 2,
        title: '义工庆功宴',
        date: '2025年2月19日',
        location: '小肥羊 American Dream 1 American Way Unit A320, East Rutherford, NJ 07073',
        image: '/imgs/yigong.jpg',
        link: '/gallery'
      },
  {
    id: 3,
    title: '2025年春节联欢晚会',
    date: '2025年2月',
    location: '新泽西文化中心',
    description: '新泽西华人联合总会、福建同乡会2025新春联欢晚会文艺表演节目。',
    image: '/imgs/Image_20250405195937.jpg',
    link: 'https://www.meipian.cn/5aokjx7c?first_share_uid=47569001&first_share_to=group_singlemessage&share_depth=1'
  },
  {
    id: 4,
    title: '老领导新春茶话会',
    date: '2025年1月22日',
    description: '又是一年新春至！在迎接2025蛇年春节到来之时，为促进新一年理事会工作的开展，同时回顾总结2024，我们举行慰问同乡会老领导的新春茶话会，向同乡会老领导们拜早年！感谢他们为同乡会的创办与发展作出的奉献，同时欢迎他们对同乡会新一年工作提出积极的指导和建议。',
    image: '/imgs/chahuahui.jpg',
  },
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">活动</h1>
        <p className="text-xl text-gray-600">
          参与我们的文化活动，体验福建文化的魅力
        </p>
      </div>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">即将举行的活动</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-2">{event.time}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium mb-4 block"
                  >
                    了解更多 →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">往期活动</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  //className={event.id === 3 ? 'event-image crop-bottom' : 'event-image'}
                  fill
                  className="object-cover"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
                {event.link ? (
                  <a
                    href={event.link}
                    target={event.link.startsWith('http') ? '_blank' : '_self'}
                    rel={event.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-red-600 hover:text-red-700 font-medium mb-4 block"
                  >
                    {event.link.startsWith('http') ? '了解更多 →' : '查看相册 →'}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-red-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">订阅我们的通讯</h2>
        <p className="text-xl text-gray-700 mb-8">
          注册接收活动更新和社区新闻
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              订阅
            </button>
          </div>
        </form>
      </section>
    </div>
  );
} 