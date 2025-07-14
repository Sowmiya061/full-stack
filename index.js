const express = require('express');
const app = express();
const PORT = 3000;


app.get('/api',(req,res) => {
    res.json({message: 'hello from Express API'});
});
app.listen(PORT,() =>{
console.log(`Server is running at http://localhost:${PORT}`);

}

);









