import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "mohammad-ali-jarjoumah-36cc1", appId: "1:879007907497:web:4d7cfe9c99a7bf878233b8", storageBucket: "mohammad-ali-jarjoumah-36cc1.firebasestorage.app", apiKey: "AIzaSyBqWOikyXAWh9_tdGNg0rOBx4KLK-sjEQU", authDomain: "mohammad-ali-jarjoumah-36cc1.firebaseapp.com", messagingSenderId: "879007907497", measurementId: "G-0J9DQHJ61Z" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging())]
};
