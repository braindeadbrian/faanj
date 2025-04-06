import Image from 'next/image';
import Link from 'next/link';

const featuredEvents = [
  {
    id: 1,
    title: '年度文化节',
    date: '2024年6月15日',
    description: '庆祝福建文化传统，包括美食、表演和艺术展示。',
    image: '/img/download (1).jfif',
  },
  {
    id: 2,
    title: '语言课程',
    date: '每周六',
    description: '学习福建方言和普通话，保持文化传承。',
    image: '/img/download (2).jfif',
  },
  {
    id: 3,
    title: '社区会议',
    date: '每月第一个周日',
    description: '讨论社区事务和未来计划。',
    image: '/img/download (3).jfif',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src='/imgs/Image_20250405195937.jpg'
          alt="FAANJ Community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            欢迎来到新泽西福建同乡会
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            传承文化，连接社区，共创未来
          </p>
          <Link
            href="/membership"
            className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700"
          >
            加入我们
          </Link>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">活动风采</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/2025cny.jpg"
                  alt="2025年理事会全体会议"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">农历新年庆祝活动</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/scholarship.jpg"
                  alt="清明节祭拜华工先辈"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">韫青奖学金</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/yigong.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">义工活动</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/huanjie.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">同乡会换届</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/zhutuan.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">组团旅游</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/yigongwudao.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">义工舞蹈队</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/shaokao.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">夏季烧烤</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/chahua.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">新春茶话会</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/imgs/jiangzuo.jpg"
                  alt="义工庆功宴"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">公益讲座</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">关于我们</h2>
              <p className="text-gray-700 mb-4">
                新泽西福建同乡会致力于促进福建文化在新泽西的传承和发展。我们通过举办文化活动、教育项目和社区服务，加强福建裔美国人之间的联系。
              </p>
              <p className="text-gray-700 mb-6">
                加入我们，成为这个充满活力的社区的一部分，共同庆祝我们的文化遗产，并为下一代创造更美好的未来。
              </p>
              <Link
                href="/about"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
              >
                了解更多
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/imgs/mainpage.jpg"
                alt="FAANJ Community"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">加入我们的社区</h2>
          <p className="text-xl mb-8">
            成为会员，享受独家活动、文化课程和社区支持。
          </p>
          <Link
            href="/membership"
            className="bg-white text-red-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
          >
            立即加入
          </Link>
        </div>
      </section>
    </main>
  );
} 