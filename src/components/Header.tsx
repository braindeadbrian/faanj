import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logo.jpg"
                alt="FAANJ Logo"
                width={160}
                height={160}
                className="h-32 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              首页
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              关于我们
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              活动
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              资源
            </Link>
            <Link href="/membership" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              会员
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              联系我们
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              href="/membership"
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
            >
              加入我们
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 