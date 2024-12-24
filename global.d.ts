// global.d.ts
import * as React from 'react';

// This will extend ReactNode to allow bigint
declare module 'react' {
  type ReactNode = React.ReactNode | bigint | React.ReactNode[];
}
