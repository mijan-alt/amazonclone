/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: [
            "links.papareact.com", 
            "fakestoreapi.com" ,
            "upload.wikimedia.org"
            
        ]
    }  ,

    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
}

module.exports = nextConfig
