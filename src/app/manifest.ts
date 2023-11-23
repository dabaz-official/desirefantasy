import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DesireFantasy',
    short_name: 'DesireFantasy',
    description: "DesireFantasy - Ignite Your Fantasy. Specializing in high-quality erotic lingerie, we are committed to bringing elegance, sexiness, and confidence to adults across North America and Europe. At DesireFantasy, we believe that everyone deserves to enjoy their own bodies and emotions, and our carefully designed product line is aimed at enhancing your intimate moments. Whether you're looking to add excitement to everyday life or explore more of your personal allure, DesireFantasy is your go-to destination.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#DB2777',
    icons: [
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}