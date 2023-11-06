import React, { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

export default function CustomPagination() {
    const [current, setCurrent] = useState(3);

    const onChange: PaginationProps['onChange'] = (page) => {
      console.log(page);
      setCurrent(page);
    };
  
    return <Pagination simple defaultCurrent={1} total={50} current={current} onChange={onChange} />
  
}



