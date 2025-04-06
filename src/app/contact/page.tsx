'use client';

import Image from 'next/image';
import { useState } from 'react';
import { sendEmail } from '../actions';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: '消息已成功发送！',
        });
      } else {
        setSubmitStatus({
          success: false,
          message: '发送消息失败，请稍后重试。',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: '发送消息失败，请稍后重试。',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">联系我们</h1>
        <p className="text-xl text-gray-600">
          如果您有任何问题或建议，请随时与我们联系
        </p>
      </div>

      {/* Contact Information */}
      <section className="mb-16">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">联系方式</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">地址</h3>
                <p className="text-gray-700">
                  219 LIVINGSTON AVE UNIT B, New Brunswick, NJ
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">电子邮箱</h3>
                <p className="text-gray-700">webmaster@faanj.org</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/imgs/FAANJ.jpg"
              alt="FAANJ Office"
              fill
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              501(c)(3) Non-Profit Organization
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 