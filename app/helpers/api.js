const OFFSET=0,
    LIMIT=10,
    /* Return products from OFFSET (0) to LIMIT (10)*/
    PRODUCTS = `https://api.escuelajs.co/api/v1/products?offset=${OFFSET}&limit=${LIMIT}`, 
    USERS = 'https://api.escuelajs.co/api/v1/users',
    CHECK_EMAIL='https://api.escuelajs.co/api/v1/users/is-available',
    CATEGORIES='https://api.escuelajs.co/api/v1/categories',
    AUTH = 'https://api.escuelajs.co/api/v1/auth/login',
    UPLOAD_FILES='https://api.escuelajs.co/api/v1/files/upload',
    /* https://api.escuelajs.co/api/v1/files/{file} */
    GET_FILE='https://api.escuelajs.co/api/v1/files/';

export default {
    OFFSET,
    PRODUCTS,
    USERS,
    CHECK_EMAIL,
    CATEGORIES,
    AUTH,
    UPLOAD_FILES,
    GET_FILE,
}