
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (req, res) =>{
    const {email, items} = await req.json()
    console.log(email)
    console.log(items)

    const transformedItems = items.map(item => ({

     
       quantity: 1,
       price_data : {
        currency:'gbp',
        unit_amount:item.price*100,
        product_data: {
            name:item.title,
            description : item.description,
            images:[item.image]
        }
       } 
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
       shipping_options:['shr_1Nw73rCZyDUGQInrqvqPEC6Z'],
        shipping_address_collection: {
            allowed_countries:['GB','US','CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/?success=true`,//come back to the home page once payment is succesful
        cancel_url: `${process.env.HOST}/checkout`, 
        metadata: {
            email,
            images: JSON.stringify(items.map(item=> item.image))
        }
      });

      res.status(200).json({id:session.id})
  }

