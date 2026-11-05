const d=require('fs').readFileSync('node_modules/react-icons/si/index.d.ts','utf8');
['SiCss3','SiCsharp','SiAngularmaterial','SiMicrosoftsqlserver','SiDotnetcore'].forEach(x=>console.log(x,d.includes(x)?'OK':'NO'));
