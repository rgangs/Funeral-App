# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### For Web Development (Windows, Mac, Linux)
```bash
cd "/d/Funeral App/Funeral App/Funeral App/app"
npm install
npm run dev
```
Open http://localhost:5173 in your browser

### For Android Development (Windows)
**First-time setup:**
1. Install JDK 17: https://adoptium.net/
2. Install Android Studio: https://developer.android.com/studio
3. Set environment variables:
   - `JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17...`
   - `ANDROID_HOME=C:\Users\YourName\AppData\Local\Android\Sdk`

**Build and run:**
```bash
npm run build:mobile
npm run android
```

### For iOS Development (Mac Only)
**First-time setup:**
1. Install Xcode from Mac App Store
2. Install CocoaPods: `sudo gem install cocoapods`

**Build and run:**
```bash
npm run build:mobile
npm run ios
```

---

## 📋 Required Tools Summary

| Tool | Windows | Mac | Purpose |
|------|---------|-----|---------|
| Node.js 18+ | ✅ Required | ✅ Required | Web development |
| Git | ✅ Required | ✅ Required | Version control |
| VS Code | ✅ Recommended | ✅ Recommended | Code editor |
| JDK 17 | ✅ For Android | ✅ For Android | Android development |
| Android Studio | ✅ For Android | ✅ For Android | Android apps |
| Xcode | ❌ Not available | ✅ Required for iOS | iOS apps |
| CocoaPods | ❌ Not needed | ✅ Required for iOS | iOS dependencies |

---

## 🎯 Quick Commands

```bash
# Web Development
npm run dev              # Start dev server
npm run build            # Build for production

# Mobile Development
npm run build:mobile     # Build web + sync mobile
npm run android          # Open Android Studio
npm run ios              # Open Xcode (Mac only)
npm run sync             # Sync changes to mobile apps
```

---

## 📖 Need More Help?

See **MOBILE_DEVELOPMENT_GUIDE.md** for detailed instructions!
