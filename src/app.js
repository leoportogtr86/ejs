const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.json({ msg: 'Ok' });
})

app.get('/p1/:nome/:idade/:profissao', (req, res) => {
    let condicao = true;
    let titulo = condicao ? 'Título 1' : 'Título 2';
    res.render('p1',
        {
            titulo,
            nome: req.params.nome,
            idade: req.params.idade,
            profissao: req.params.profissao
        });
})

app.listen(8080, () => {
    console.log('Server online.');
})