const path = require('path')

module.exports = (nextConfig = {}) => {
    return Object.assign(nextConfig, {
        env: {
            SUPABASE_ENDPOINT: process.env.SUPABASE_ENDPOINT,
            SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
            CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
            CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
            NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
        },
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }

            const { dir } = options

            config.module.rules.push({
                test: /\.(graphql|gql)$/,
                include: [dir],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader'
                    }
                ]
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        },
        webpackDevMiddleware: (config) => {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300
            }
            return config
        },
        trailingSlash: true,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')]
        },
        experimental: {
            images: {
                layoutRaw: true,
            },
        },
        images: {
            domains: ['images.ctfassets.net']
        },
    })
}