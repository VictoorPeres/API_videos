const custonExpress = require('./config/custon-express');

const app = custonExpress();

app.listen(3000, () => {
    console.log('Servidor Ativo');
});