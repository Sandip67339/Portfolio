# 🚀 Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Prerequisites

Before deploying, ensure:
1. Your project builds successfully: `npm run build`
2. All personal information is updated in `/src/data/portfolio.js`
3. You have a GitHub account (for most platforms)

## Option 1: Vercel (Recommended)

### Step-by-Step

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Custom Domain**
   - Go to project settings
   - Add custom domain
   - Follow DNS configuration

### Benefits
- ✅ Automatic deployments on git push
- ✅ Serverless functions support
- ✅ Edge caching
- ✅ Analytics included
- ✅ Free tier available

---

## Option 2: Netlify

### Step-by-Step

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site"
   - Choose "Import an existing project"
   - Connect GitHub
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Environment Variables
1. Go to Site settings → Build & deploy
2. Add required variables:
   ```
   VITE_EMAIL_SERVICE_ID=xxx
   VITE_EMAIL_TEMPLATE_ID=xxx
   VITE_EMAIL_PUBLIC_KEY=xxx
   ```

### Benefits
- ✅ Automatic branch previews
- ✅ Form handling included
- ✅ Easy rollbacks
- ✅ Free tier available

---

## Option 3: GitHub Pages

### Step-by-Step

1. **Update package.json**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add Deploy Script**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Select "gh-pages" as source branch
   - Your site is live!

---

## Option 4: AWS Amplify

### Step-by-Step

1. **Connect Repository**
   - Visit [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
   - Click "Get Started"
   - Connect GitHub repository

2. **Configure Build**
   - Build command: `npm run build`
   - Build output directory: `dist`

3. **Deploy**
   - Click "Save and deploy"
   - Automatic deployments on git push

---

## Option 5: Self-Hosted (Linux)

### Using Nginx

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   ```bash
   scp -r dist/* user@server:/var/www/portfolio
   ```

3. **Configure Nginx**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /var/www/portfolio;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. **Enable SSL**
   ```bash
   sudo apt install certbot
   sudo certbot certonly --nginx -d yourdomain.com
   ```

---

## Post-Deployment Checklist

- [ ] Test all links and buttons
- [ ] Verify responsive design on mobile
- [ ] Check form submission
- [ ] Test smooth scrolling
- [ ] Verify animations load
- [ ] Check SEO meta tags
- [ ] Test social share buttons
- [ ] Verify resume download
- [ ] Check page load speed
- [ ] Test on different browsers

---

## Performance Tips

### Optimize Images
```bash
# Install imagemin
npm install imagemin-cli imagemin-mozjpeg imagemin-pngquant --save-dev
```

### Enable Compression
Most platforms include gzip compression by default.

### Monitor Performance
- Vercel Analytics (included)
- Netlify Analytics (included)
- Google PageSpeed Insights
- GTmetrix

---

## Continuous Deployment

### Automatic Deployments

Most platforms support automatic deployments:

1. **Vercel/Netlify**: Push to main branch → auto-deploy
2. **GitHub Actions**: Create workflows for CI/CD
3. **GitHub Pages**: Push to main → auto-deploy

### Example GitHub Action

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Troubleshooting

### Build Fails After Deployment

```bash
# Clear cache and rebuild
npm run build --verbose
```

### Assets Not Loading

Check base URL in `vite.config.js`:
```javascript
export default {
  base: '/portfolio/', // if using subdirectory
}
```

### 404 on Refresh

Ensure your platform rewrites all requests to `index.html`:

**Netlify** (`netlify.toml`):
```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

**Vercel** (automatic for SPAs)

---

## Domain Configuration

### Add Custom Domain

1. **Purchase Domain**
   - Namecheap, GoDaddy, or your registrar

2. **Update DNS**
   - Get nameservers from hosting provider
   - Update at domain registrar

3. **Wait for Propagation**
   - Usually 24-48 hours
   - Check with: `nslookup yourdomain.com`

---

## SSL/HTTPS

Most modern platforms include free SSL by default:
- Vercel ✅
- Netlify ✅
- AWS Amplify ✅
- GitHub Pages ✅

For self-hosted: Use Let's Encrypt (free)

---

## Monitor & Maintain

### Uptime Monitoring
- UptimeRobot (free)
- Pingdom
- StatusPage

### Analytics
- Google Analytics
- Vercel Analytics
- Netlify Analytics

### Updates
- Keep dependencies updated
- Test updates locally first
- Use automated updates if available

---

## Getting Help

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Docs**: https://pages.github.com
- **AWS Amplify**: https://aws.amazon.com/amplify/

---

Happy Deploying! 🎉
