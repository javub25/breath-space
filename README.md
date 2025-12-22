
# Breath Space

Breath Space offers personalized break recommendations to help people take break when you need them.
&nbsp;\
By analyzing your activity type, energy levels and available time, it suggests the perfect way
to relax.


![Breath Space - Take the break you deserve](https://res.cloudinary.com/dw2lgdjr8/image/upload/v1766420344/breathSpace_aeuuif.jpg)


## 🚀 Features

- Take control of your break with a <code>counter</code> that lets you start, stop and track
you break duration.
- Sign in with <code>Google account</code> to access your break history, view previous
messages and delete them.


## 🚀 Tech Stack

### Frontend
```
┌──────────┐ ┌──────────────┐ ┌────────────┐
│  React   │ │ Tailwind CSS │ │ TypeScript │
└──────────┘ └──────────────┘ └────────────┘

┌──────┐ ┌──────────────────────────────┐
│ Vite │ │ Jest / React-Testing-Library │
└──────┘ └──────────────────────────────┘
```

### Backend
```
┌─────────────────────────┐ ┌──────────────────────┐
│      Supabase           │ │   Auth0 (Google)     │
│ User rest messages DB   │ │ Secure authentication│
└─────────────────────────┘ └──────────────────────┘
```

### Frontend

- **React**
- **Tailwind CSS**
- **TypeScript**
- **Vite**
- **Jest / React-Testing-Library**

### Backend 

- **Supabase** - Database to store user rest messages
- **Auth0 (Google)** - Secure authentication

&nbsp;

## 📁 Folder Structure
```css
src/
├── app/
│   ├── assets/  
│   ├── database/          
│   ├── features/    
│   │    ├── counter/
│   │    ├── form/
│   │    ├── recommendation/
│   │    ├── user/
│   ├── layouts/
│   ├── modules/
│   └── styles/
│
├── App.tsx
├── main.tsx
├── index.html
└── vite.config.ts
```

## 🚀 Getting Started


1. Clone the repository:
```git
 git clone https://github.com/javub25/breath-space.git
```

2. Navigate to the project directory:
```git
cd breath-space
```
3. Install dependencies:
```npm
 npm install
```
4. Start the development server:
```npm
 npm run dev
```

5. Run test environment:
```npm
npm run test
```

## Credits

- Developed by Javier Úbeda

&nbsp;




## 📖 Docs

### How to create a project setup with Google Auth Platform
https://supabase.com/docs/guides/auth/social-login/auth-google


### How to use Google provider in local development:
https://supabase.com/docs/guides/auth/social-login/auth-google#local-development

### How to get user logged:
https://supabase.com/docs/reference/javascript/auth-getuser
