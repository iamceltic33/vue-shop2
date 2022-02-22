const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

const port = 3000;

const catalog_path = path.resolve(__dirname, './data/catalog.json')
const cart_path = path.resolve(__dirname, './data/cart.json')

app.use(express.json())

app.get('/api/v1/catalog', (req, res) => {
    fs.readFile(catalog_path, 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/cart', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
})

app.post('/api/v1/cart', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if (!err) {
            const cart = JSON.parse(data);
            const index = cart.findIndex((item) => item.id === req.body.id);
            if (index != -1) {
                cart[index].count++;
            } else {
                req.body.count = 1;
                cart.push(req.body);
            }
            fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
                res.sendStatus(201)
            })
        } else {
            res.status(500).send(err)
        }
    })
})

app.delete('/api/v1/cart/:id', (req, res) => {
    if (req.params.id == "all") {
        fs.writeFile(cart_path, '[]', 'utf-8', (err, data) => {
            if (!err) {
                res.sendStatus(200)

            }
        })
    }
    else
        fs.readFile(cart_path, 'utf-8', (err, data) => {
            if (!err) {
                const cart = JSON.parse(data);
                console.log(cart);
                console.log(req);
                const index = cart.findIndex((item) => item.id == req.params.id);
                if (index >= 0) {
                    cart.splice(index, 1);
                    fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
                        res.sendStatus(200)
                    })
                }
                else {
                    res.status(500).send(err);
                }
            }
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

