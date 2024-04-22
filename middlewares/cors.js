const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3005'
  ]; 

function cors(req, res, next) {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)) { 
        res.header('Access-Control-Allow-Origin', origin);
    }
    next(); // передаем за проезд!!!
} 

module.exports = { cors }
