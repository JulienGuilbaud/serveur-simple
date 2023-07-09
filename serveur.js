import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenvConfig();

const server = express();
const currentFileUrl = import.meta.url;
const currentDirPath = dirname(fileURLToPath(currentFileUrl));

const port = process.env.PORT || 3001;

server.use(express.static(join(currentDirPath, 'dist')));
server.use(express.json())

server.get('/api/mesdata',(req,res) => {
res.send({
  msg:"bravo tu as access au données"
})
})

server.get('/*', (req, res) => {
  res.sendFile(join(currentDirPath, 'dist', 'index.html'));
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});