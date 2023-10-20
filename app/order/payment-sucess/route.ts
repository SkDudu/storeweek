import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16"
})

export const POST = async (request: Request) => {
    const signature = request.headers.get('stripe-signature')

    if(!signature){
        return NextResponse.error()
    }

    const text = await request.text()

    const event = stripe.webhooks.constructEvent(
        text,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET_KEY as string
    )

    if(event.type === 'checkout.session.completed'){
        const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
            event.data.object.id,
            {
                expand: ['line_items']
            }
        )
        const lineItems = sessionWithLineItems.line_items

        // criar pedido com o prisma
        console.log(lineItems)
        //{id: ..., object: ..., after_expiration: ..., allow_promotion_codes: ..., amount_subtotal: ..., amount_total: ..., automatic_tax: ..., 
        //billing_address_collection: ..., cancel_url: ..., client_reference_id: ..., client_secret: ..., consent: ..., consent_collection: ..., 
        //created: ..., currency: ..., currency_conversion: ..., custom_fields: ..., custom_text: ..., customer: ..., customer_creation: ..., 
        //customer_details: ..., customer_email: ..., expires_at: ..., invoice: ..., invoice_creation: ..., livemode: ..., locale: ..., metadata: ..., 
        //mode: ..., payment_intent: ..., payment_link: ..., payment_method_collection: ..., payment_method_configuration_details: ..., payment_method_options: ..., 
        //payment_method_types: ..., payment_status: ..., phone_number_collection: ..., recovered_from: ..., setup_intent: ..., shipping_address_collection: ..., 
        //shipping_cost: ..., shipping_details: ..., shipping_options: ..., status: ..., submit_type: ..., subscription: ..., success_url: ..., total_details: ..., 
        //ui_mode: ..., url: ...}}
    }

    return NextResponse.json({received: true})
}