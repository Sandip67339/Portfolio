# Deploy Portfolio to Vercel - Step by Step Guide

## Prerequisites
- GitHub account (to host your code)
- Vercel account (free)

---

## Step 1: Push Your Code to GitHub

### 1a. Initialize Git (if not already done)
```bash
cd c:\Users\lenevo\Desktop\folde\portfolio
git init
```

### 1b. Add all files
```bash
git add .
```

### 1c. Create first commit
```bash
git commit -m "Initial portfolio commit"
```

### 1d. Create a new repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name)
3. Click "Create repository"
4. Copy the repository URL

### 1e. Connect local repo to GitHub
Replace `YOUR_GITHUB_URL` with your repository URL:
```bash
git remote add origin YOUR_GITHUB_URL
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/Sandip67339/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### 2a. Sign Up on Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 2b. Create New Project
1. Click "New Project" or "Add New..."
2. Click "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Continue"

### 2c. Configure Project
1. **Project Name:** `portfolio` (or your preferred name)
2. **Framework:** Select `Vite` (or let it auto-detect)
3. **Root Directory:** Leave as `/` (default)
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`
6. **Install Command:** `npm install`

### 2d. Environment Variables (if needed)
Add your EmailJS credentials:
- **Key:** `VITE_EMAILJS_PUBLIC_KEY`
- **Value:** `1Dolzul3heZ2d5NzE`

Then click "Deploy"

---

## Step 3: Wait for Deployment

Vercel will:
- Build your project
- Run tests
- Deploy to production

You'll see a progress indicator. Once complete, you'll get a URL like:
`https://portfolio-xxx.vercel.app`

---

## Step 4: Update Your Contact Form (Important!)

If using EmailJS, update your `.env.local` file or Contact.jsx:

**Option A: Using Environment Variables**
Create `.env.local`:
```
VITE_EMAILJS_PUBLIC_KEY=1Dolzul3heZ2d5NzE
VITE_EMAILJS_SERVICE_ID=service_faovww5
VITE_EMAILJS_TEMPLATE_ID=template_vyc3j11
```

Then update Contact.jsx:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { ... }
);
```

**Option B: Keep hardcoded (current setup works)**
Your current setup is fine and will work on Vercel.

---

## Step 5: Custom Domain (Optional)

1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain (if you have one)
4. Follow DNS configuration steps

---

## Step 6: Auto-Deployment

Now whenever you push to GitHub:
```bash
git add .
git commit -m "Your message"
git push
```

Vercel automatically deploys! 🚀

---

## Troubleshooting

### Build Fails?
- Check: `npm run build` works locally
- Check: All imports are correct
- Check: No TypeScript errors

### EmailJS not working?
- Verify public key is correct
- Check EmailJS service is connected
- Check template variables match

### Site shows old version?
- Hard refresh: `Ctrl + Shift + R` (or Cmd + Shift + R on Mac)
- Clear cache in Vercel Settings → Storage

---

## Your Deployment URL

Once deployed, share your portfolio URL:
```
https://your-portfolio-name.vercel.app
```

Share with:
- Recruiters
- LinkedIn
- Resume/CV
- Portfolio platforms

---

## Quick Commands

```bash
# Build locally to test
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint

# Push to GitHub and auto-deploy
git add .
git commit -m "message"
git push
```

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/config/
- **EmailJS Docs:** https://www.emailjs.com/docs/

---

**You're all set! Your portfolio will be live in minutes! 🎉**
