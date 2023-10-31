import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";



const handler = NextAuth({
   
    // adapter: FirestoreAdapter({
    //     credential: cert({
    //       projectId: process.env.FIREBASE_PROJECT_ID,
    //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    //       privateKey:process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    //     }),
    //   }),

    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        })
      ],

      callbacks: {
   
        async session({session}){
           
            return session
        },

        async signIn({profile}){
            console.log(profile)
            return profile
            
        }
    }


       

})

export { handler as GET, handler as POST }