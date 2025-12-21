'use client';

import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import useWindowSize from '@/hooks/useWindowSize';
import { useSearchParams } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';

interface IProps {
  children: ReactNode;
}

const ShopLayout: FC<IProps> = ({ children }) => {
  const { width } = useWindowSize();
  const [isModel, setIsModel] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const startPrice = searchParams.get('startPrice');
  const endPrice = searchParams.get('endPrice');
  const brand = searchParams.get('brand');

  const mobileView = (
    <div className="block lg:hidden bg-gradient-to-r from-blue-50 to-gray-50 z-[100] w-full max-w-[96%] mx-auto sticky top-[133px] mb-[20px] rounded-lg border border-gray-200 p-3">
      <div className="flex items-center justify-between">
        <Breadcrumb category={category} brand={brand} />
        <Button
          onClick={() => setIsModel(true)}
          className="flex items-center space-x-2 px-3 py-2 cursor-pointer rounded-lg bg-blue-900 text-white hover:bg-blue-800"
        >
          <BsFilter />
          <span className="text-sm">Filter Parts</span>
        </Button>
      </div>

      <CustomModal
        style={{ width: 300, height: 700 }}
        isOpen={isModel}
        onClose={() => setIsModel(false)}
        title="Filter Auto Parts"
      >
        <Sidebar />
      </CustomModal>
    </div>
  );

  const desktopView = (
    <div className="hidden lg:block w-full max-w-[300px] sticky top-[133px] mb-[20px]">
      <Breadcrumb category={category} brand={brand} />
      <Sidebar />
    </div>
  );

  // IN MOBILE VIEW WHEN SELECT FILTER THEN CLOSE THE MODAL
  useEffect(() => {
    if (width > 768) return;
    if (isModel) setIsModel(false);
  }, [category, startPrice, endPrice, brand]);
  
  return (
    <section className="w-full h-auto bg-gradient-to-b from-white to-gray-50 relative">
      <div className="w-full flex flex-col lg:flex-row max-w-[1400px] mx-auto">
        {mobileView}
        {desktopView}
        <div className="w-full h-full lg:px-6 pt-1">{children}</div>
      </div>
    </section>
  );
};

export default ShopLayout;