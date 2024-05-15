const { 
    addNewBookHandler,
    getAllBookHandler,
    getBooksByIdHandler,
    editBooksByIdHandler,
    deleteBooksByIdHandler
} = require ('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNewBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBooksByIdHandler,
    },
];

module.exports = routes;