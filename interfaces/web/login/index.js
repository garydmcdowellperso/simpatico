import { setConfig } from 'next/config';

import nextConfig from './next.config';
import setupServer from './server';

setConfig(nextConfig);
setupServer();
