const router = require('express').Router()
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes)
        })

})

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((data) => res.json(data))
})

router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
})


module.exports = router