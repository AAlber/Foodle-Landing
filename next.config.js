const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
/** @type {import('next').NextConfig} */
// Prevents XSS, Clickjacking and Injection Attacks
// 'unsafe-eval' is temporary solution - to avoid it we have to remove all inline event-handlers
// 'unsafe-inline' is not ideal, but also very little can be achieved with CSS XSS attacks (Even Twitter and Spotify use it and they have very high security rating)
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' *.cloudflareinsights.com 'unsafe-eval'; 
  child-src ${process.env.CLIENT_URL};
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://db.onlinewebfonts.com http://db.onlinewebfonts.com; 
  img-src 'self' data:;
  connect-src 'self' https://cloudflareinsights.com ${process.env.NEXT_PUBLIC_SERVER_URL}  https://s3.eu-central-1.amazonaws.com;
  font-src 'self' https://db.onlinewebfonts.com data: https://fonts.gstatic.com http://db.onlinewebfonts.com;  
`
const securityHeaders = [
  // { 
  // NOT NECESSARY currently since we are deploying to Vercel which automatically does this
  // /** Enforces https connections for 2 years **/ 
  // key: 'Strict-Transport-Security',
  // value: 'max-age=63072000; includeSubDomains; preload'
  // }
  { 
    /** Detects reflected XSS attacks and prevents them **/ 
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  { 
    /** Disables site from being displayed in iframe, prevents clickjacking **/
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  { 
    /** Allows geolocation to autogenerate a user's zip, disables Google's FLoC to protect user's privacy from Google **/
    key: 'Permissions-Policy',
    value: 'geolocation=(), interest-cohort=()' 
  },
  { 
    /** Prevents browser from guessing content-type if header is not explicitly set, can prevent XSS exploits **/
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    /** Retains much of the referrer's usefulness, while mitigating the risk of leaking data cross-origins. **/
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  // }
]
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["foodle-bucket.s3.eu-central-1.amazonaws.com"]
  },
  i18n: {
   locales: ["en", "de"],
   defaultLocale: "de",
 },
  async headers() {
    return [
      {
        // Applies security headers to all routes in the application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/heroku-auth',
        destination: process.env.NEXT_PUBLIC_SERVER_URL+'api/auth',
        permanent: false,
        basePath: false
      },
      {
        source: '/calendly',
        destination: 'https://calendly.com/nihad-zeitouny/diskussion-mit-foodle-discussion-with-foodle',
        permanent: false,
        basePath: false
      },
      {
        source: '/home',
        destination: '/',
        permanent: false,
        basePath: false
      },
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE) {
     config.plugins.push(
       new BundleAnalyzerPlugin({
         analyzerMode: 'server',
         analyzerPort: isServer ? 8888 : 8889,
         openAnalyzer: true,
       })
     )
    }
    return config
  },
}
module.exports = nextConfig;