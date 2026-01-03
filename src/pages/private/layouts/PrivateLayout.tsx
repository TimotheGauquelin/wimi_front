import AsideNavBar from '@/components/layouts/private/AsideNavBar/AsideNavBar';
import Header from '@/components/layouts/private/header/Header';
import MainBlock from '@/components/layouts/private/MainBlock/MainBlock';
import React, { useRef, useEffect, useState } from 'react';

const PrivateLayout: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className='h-screen w-screen'>
      <Header ref={headerRef} />
      <div
        className="grid grid-cols-12 flex"
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <AsideNavBar />
        <MainBlock />
      </div>
    </div>
  );
};

export default PrivateLayout;

