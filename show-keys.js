require('dotenv').config({ path: '.env.local' });
console.log('ENV KEYS:', Object.keys(process.env).filter(k => 
  !k.startsWith('npm_') && 
  !k.startsWith('NODE') && 
  !['PATH','TEMP','TMP','APPDATA','LOCALAPPDATA','COMPUTERNAME','USERNAME','OS'].includes(k)
));
