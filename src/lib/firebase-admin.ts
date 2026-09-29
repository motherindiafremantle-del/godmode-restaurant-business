import { getApps, initializeApp, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';

let app: App | null = null;
let db: Firestore | null = null;

export function getAdminFirestore(): Firestore {
  if (db) return db;

  if (getApps().length === 0) {
    const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || 
      path.resolve(process.cwd(), '../Mother India/ordering-admin-app/service-account.json');

    if (fs.existsSync(/*turbopackIgnore: true*/ credPath)) {
      const serviceAccount = JSON.parse(fs.readFileSync(/*turbopackIgnore: true*/ credPath, 'utf8'));
      app = initializeApp({
        credential: cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.project_id,
      });
    } else {
      // Fallback for Vercel deployment where env vars may provide JSON credentials directly
      const inlineCreds = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
      if (inlineCreds) {
        const serviceAccount = JSON.parse(inlineCreds);
        app = initializeApp({
          credential: cert(serviceAccount),
          projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.project_id,
        });
      } else {
        app = initializeApp({
          projectId: process.env.FIREBASE_PROJECT_ID || 'studio-633272376-49397',
        });
      }
    }
  } else {
    app = getApps()[0];
  }

  db = getFirestore(app);
  return db;
}
