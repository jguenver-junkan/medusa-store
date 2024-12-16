const dotenv = require('dotenv')

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
  case 'production':
    ENV_FILE_NAME = '.env.production';
    break;
  case 'staging':
    ENV_FILE_NAME = '.env.staging';
    break;
  case 'test':
    ENV_FILE_NAME = '.env.test';
    break;
  case 'development':
  default:
    ENV_FILE_NAME = '.env';
    break;
}

try {
  dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {
}

const DATABASE_URL = process.env.DATABASE_URL
const REDIS_URL = process.env.REDIS_URL

const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads"
    },
  },
  {
    resolve: "@medusajs/admin",
    options: {
      autoRebuild: true,
      develop: {
        open: process.env.OPEN_BROWSER !== "false",
      },
    },
  },
]

const modules = {
  eventBus: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: REDIS_URL
    }
  },
  cacheService: {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: REDIS_URL
    }
  },
}

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
    database_extra: { ssl: { rejectUnauthorized: false } }
  },
  plugins,
  modules,
}