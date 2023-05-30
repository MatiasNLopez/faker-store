const OFFSET=0,
    LIMIT=10,
    API = 'https://fakestoreapi.com',
    CARTS = `${API}/carts`,
    /* Return products from OFFSET (0) to LIMIT (10)*/
    PRODUCTS = `${API}/products`, 
    USERS = `${API}/users`,
    /* CHECK_EMAIL='https://api.escuelajs.co/api/v1/users/is-available', */
    CATEGORIES=`${API}/products/categories`,
    AUTH = `${API}/auth/login`
    /* UPLOAD_FILES='https://api.escuelajs.co/api/v1/files/upload', */
    /* https://api.escuelajs.co/api/v1/files/{file} */
    /* GET_FILE='https://api.escuelajs.co/api/v1/files/'; */

export default {
    OFFSET,
    CARTS,
    PRODUCTS,
    USERS,
    /* CHECK_EMAIL, */
    CATEGORIES,
    AUTH,
    /* UPLOAD_FILES, */
    /* GET_FILE, */
}