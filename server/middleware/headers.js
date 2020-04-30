module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');     // response header says allow code from any origin
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');   // response header specifies methods allowed when accessing whatever resource we are after
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // indicates whic HTTP headers can be used in the actual request..."pre-flight request" -- this is a CORS request to see if the protocol is understood, automatically listed by the browser


    next();
}

///  THIS MIDDLEWARE FILE CAN BE USED IN PROJECTS IN THE FUTURE!!!! Think of it as a general summary: letting browser know what it can and cannot do