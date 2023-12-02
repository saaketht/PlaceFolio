exports.buildPath =
function buildPath(route)
{
    if (process.env.NODE_ENV === 'production')
    {
    return 'http://18.209.131.126:5000/' + route;  //RE PLACE WITH ACTUAL ROUTE
    }
    else
    {
    return 'http://localhost:5000/' + route;
    }
}
