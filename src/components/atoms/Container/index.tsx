import React, { FC, ReactNode } from 'react';

type IContainerProps = {
  children?: ReactNode;
};

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className="p-4 flex mx-auto w-9/12 mt-8 border-solid border border-gray-300 h-[36rem]">
      {children}
    </div>
  );
};

export default Container;
