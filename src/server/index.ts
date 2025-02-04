import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { Octokit } from 'octokit';

const port = process.env.PORT || 3000;
const githubHost = process.env.GITHUB_HOST || 'github.com'

const portals = {
  "miibo": {
    name: "miibo"
  },
  "real-time-db-mirror": {
    name: "Real Time DB Mirror"
  }
}

const app = new Hono();

app.route('/api', new Hono()
  .route('/portals', new Hono()
    .get('/', async (c) => {

      
      

      return c.json(Object.values(portals))
    })
    .get('*/list', async (c) => {
      const email = c.req.header('X-Auth-Request-Email') || process.env.GITHUB_EMAIL
      const user = c.req.header('X-Auth-Request-User') || process.env.GITHUB_USER
      const token = c.req.header('X-Auth-Request-Access-Token') || process.env.GITHUB_ACCESS_TOKEN
      
      
    })
  )
)

app.use('/*', serveStatic({ root: './dist' }));

export default {
  fetch: app.fetch,
  port: port
}

console.log(`Server is running on port ${port}`);
