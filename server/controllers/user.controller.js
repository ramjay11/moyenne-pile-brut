const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bonjour!');
});

// export router
module.exports = router;