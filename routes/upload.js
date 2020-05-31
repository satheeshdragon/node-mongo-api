const router = require('express').Router();




router.route('/').post((req,res) => {

	if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `${__dirname}/${file.name}` });
    });


});




module.exports = router;
