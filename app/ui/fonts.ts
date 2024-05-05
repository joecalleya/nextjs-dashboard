import { Inter, Lusitana } from 'next/font/google';

// we need to optimase and add fonts at compile time, 
// this will help with avoiding backup fronts
// each font is being specificd here

export const inter = Inter({ subsets: ['latin'] });
 

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});