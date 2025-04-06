import Image from 'next/image';

const sponsors = [
  {
    category: '主要赞助商',
    items: [
      {
        title: '翠湖海鲜酒楼',
        description: '新泽西州福建同乡会长期合作伙伴，提供优质餐饮服务。',
        link: 'https://www.example.com',
        image: '/imgs/cuihu.jpg',
      },
      {
        title: '小肥羊火锅',
        description: '支持社区活动，提供优质火锅餐饮服务。',
        link: 'https://www.example.com',
        image: '/imgs/xiaofeiyang.jpg',
      },
      {
        title: '新泽西华人联合总会',
        description: '长期合作伙伴，共同促进华人社区发展。',
        link: 'https://www.example.com',
        image: '/imgs/lianhezonghui.jpg',
      },
    ],
  },
  {
    category: '社区合作伙伴',
    items: [
      {
        title: '福建商会',
        description: '支持商业发展和文化交流。',
        link: 'https://www.example.com',
        image: '/imgs/shanghui.jpg',
      },
      {
        title: '华人社区中心',
        description: '提供社区服务和活动场地支持。',
        link: 'https://www.example.com',
        image: '/imgs/shequzhongxin.jpg',
      },
      {
        title: '教育基金会',
        description: '支持教育发展和奖学金项目。',
        link: 'https://www.example.com',
        image: '/imgs/jiaoyujijin.jpg',
      },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">赞助商</h1>
        <p className="text-xl text-gray-600">
          感谢所有支持新泽西福建同乡会的赞助商和合作伙伴
        </p>
      </div>

      {sponsors.map((category) => (
        <section key={category.category} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    了解更多 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Sponsorship Information */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">成为赞助商</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            我们欢迎各类企业、组织和个人成为我们的赞助商。通过赞助，您可以：
          </p>
          <ul className="space-y-2 text-left mb-8">
            <li>• 提升品牌知名度</li>
            <li>• 支持社区发展</li>
            <li>• 建立长期合作关系</li>
            <li>• 获得活动展示机会</li>
          </ul>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            联系我们
          </a>
        </div>
      </section>
    </div>
  );
} 