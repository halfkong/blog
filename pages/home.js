'use strict';

/**
 * @author harris
 */

import React from 'react';
import Head from 'next/head';
import {Button} from 'antd';
import '../theme/index.less';

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='/public/styles.css' />
    </Head>
    <Button type='primary'>test</Button>
  </div>
)
