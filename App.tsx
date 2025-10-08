import React from 'react';
import { AppNavigator } from '@/navigation/AppNavigator';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';


export default function App() {
  return (
      <GluestackUIProvider>
          <AppNavigator />
      </GluestackUIProvider>
  );

}

