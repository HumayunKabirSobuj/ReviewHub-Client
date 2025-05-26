'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllCategories } from '@/services/Categories';
 // adjust path as needed

type Category = {
  _id: string;
  name: string;
  slug: string;
};

export const CategoryMegaMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllCategories();
      if (res?.success && res?.data) {
        setCategories(res.data);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6 w-[600px]">
      {categories?.map((category) => (
        <div key={category._id}>
          <Link
            href={`/categories/${category.slug}`}
            className="text-sm text-gray-700 hover:underline"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
