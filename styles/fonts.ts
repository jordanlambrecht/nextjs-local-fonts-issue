import localFont from 'next/font/local'

/******************************************/
/*              GILROY                    */
/******************************************/

const gilroy = localFont({
  src: [
    // SemiBold (600)
    {
      path: '/fonts/gilroy/gilroy-bold.woff2',
      weight: '600', // font-semibold
      style: 'normal',
    },
    {
      path: '/fonts/gilroy/gilroy-bolditalic.woff2',
      weight: '600', // font-semibold
      style: 'italic',
    },
    // Bold (700)
    {
      path: '/fonts/gilroy/gilroy-extrabold.woff2',
      weight: '700', // font-bold
      style: 'normal',
    },
    {
      path: '/fonts/gilroy/gilroy-extrabolditalic.woff2',
      weight: '700', // font-bold
      style: 'italic',
    },
    // ExtraBold (800)
    {
      path: '/fonts/gilroy/gilroy-black.woff2',
      weight: '800', // font-extrabold
      style: 'normal',
    },
    {
      path: '/fonts/gilroy/gilroy-blackitalic.woff2',
      weight: '800', // font-extrabold
      style: 'italic',
    },
  ],
  variable: '--font-gilroy',
})

export { gilroy }
