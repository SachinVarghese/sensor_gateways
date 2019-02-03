
const Koa = require('koa')
const Router = require('koa-router')
const request = require('request-promise-native')

const app = new Koa()
const router = new Router()

// obtain API key from your Ubiworx contact
const { APIKEY } = process.env

if (!APIKEY) {
    console.error('APIKEY environment variable missing. Please re-run with `APIKEY=<key> npm run server`');
    process.exit(1);
}

const ubiworxHttpOptions = {
    'auth': { 'bearer': APIKEY }
}

/**
 * Response headers middleware setup
 */
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    await next()
})

/**
 * Simple API route to Get a list of gateways
 */
router.get('/gateways', async ctx => {
    const response = await request
        .get('https://staging.ubiworx.com/v2/gateways', ubiworxHttpOptions)
        .catch((err) => {
            /**
             * TODO: Consider handling errors properly
             * by returning errors to the caller
             */
            throw new Error(JSON.stringify(err))
        })

    if (response) {
        /**
         * TODO: Consider re-mapping the ubiworx response to
         * your own JSON structure instead of passing it through.
         */
        ctx.body = JSON.parse(response).result
    }
})

/**
 * Simple API route to Get a list of sensors
 */
router.get('/sensors', async ctx => {
    /**
     * TODO: Call the ubiworx sensors API, handle errors
     * and return your own version of the JSON to the caller
     */
    ctx.body = []
})

/**
 * Simple API route to Get data for one sensors
 */
router.get('/sensors/:id/data', async ctx => {
    /** TODO: Grab the sensor ID */
    console.log(ctx.params)

    /** TODO: Grab the query parameters,
     * it is up to you to decide that query parameters to accept,
     * see the ubiworx /data API for inspiration.
     */
    console.log(ctx.query)

    /**
     * TODO: Call the ubiworx data API, handle errors
     * and return your own version of the JSON to the caller
     */
    ctx.body = []
})


/**
 * Router middleware setup
 */
app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) => {
    log.error('server error', err, ctx)
})

// Start service
app.listen(4000)
