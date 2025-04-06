import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">关于我们</h1>
        <p className="text-xl text-gray-600">
          传承福建文化，连接社区，共创美好未来
        </p>
      </div>
        {/* About UsSection */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">We are the Fujian American Association of New Jersey</h2>
            <p className="text-gray-700 mb-4">
            As a non-profit organization, our goals are to unify and utilize all our resources to support the rights of Fujian Americans and other citizens, to assist Fujian Americans to adopt and integrate into the mainstream, to improve and raise the standards of the public image of Fujian American and other Chinese Americans, to introduce Chinese culture and bridge Sino-American relations.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Organization leaders:</h2>
            <p className="text-gray-700 mb-4">
            主席：Shiqun Li 李世群<br /><br />

            
会长：Jason guo 郭洪宝 <br /><br />


秘书长：Jenny Huang 黄文静<br /><br />

义工队长：林贤锋
            </p>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
            <p className="text-gray-700 mb-4">
              新泽西福建同乡会致力于在新泽西州保护和推广中华文化传统。我们通过举办文化活动、教育项目和社区服务，加强新泽西福建乡亲之间的联系，同时促进与其他社区的文化交流。
            </p>
            <p className="text-gray-700">
              我们相信，通过保持和分享我们的中华传统文化，我们可以为下一代创造更丰富、更多元的文化环境。
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/imgs/aboutus.jpg"
              alt="FAANJ Mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] order-2 md:order-1">
            <Image
              src="/img/download (7).jfif"
              alt="FAANJ History"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">我们的历史</h2>
            <p className="text-gray-700 mb-4">
              新泽西福建同乡会成立于2010年，由一群热心的福建裔美国人发起。从最初的几十名会员发展到今天拥有数百名活跃会员的规模，我们见证了社区的不断成长和壮大。
            </p>
            <p className="text-gray-700">
              多年来，我们举办了众多成功的文化活动，包括春节庆祝、文化节、语言课程等，为社区成员提供了宝贵的文化交流和社交机会。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">文化传承</h3>
            <p className="text-gray-700">
              保护和传承福建文化传统，确保我们的文化遗产代代相传。
            </p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">社区建设</h3>
            <p className="text-gray-700">
              加强社区联系，促进成员之间的互助和支持。
            </p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">教育发展</h3>
            <p className="text-gray-700">
              提供教育资源和机会，支持社区成员的个人成长。
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-red-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">加入我们的社区</h2>
        <p className="text-xl text-gray-700 mb-8">
          成为会员，享受独家活动、文化课程和社区支持。
        </p>
        <a
          href="/membership"
          className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700"
        >
          立即加入
        </a>
      </section>
    </div>
  );
} 