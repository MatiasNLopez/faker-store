const OFFSET=0,
    LIMIT=5,
    API = 'https://fakestoreapi.com',
    /* 
        - Get all carts 
        - Get a single cart ${API}/carts/id
        - Add a new product
        - Update and Delete a product ${API}/carts/id
    */
    CARTS = `${API}/carts`,
    /* Limit results of Get all carts */
    CARTS_LIMIT = `${CARTS}/carts?limit=${LIMIT}`,
    /* Get user carts ${CARTS}/user/id*/
    USER_CARTS=`${CARTS}/user`,
    /* 
        - Get all products 
        - Get a single product, update and delete ${API}/products/id
        - Add new product
    */
    PRODUCTS =`${API}/products`,
    /* Limit results of Get all products */
    PRODUCTS_LIMIT = `${PRODUCTS}?limit=${LIMIT}`, 
    /* Get products in a specific category */
    PRODUCT_BY_CATEGORY=`${PRODUCTS}/category`,
    /* Get all categories */
    CATEGORIES=`${PRODUCTS}/categories`,
    /* 
        - Get all users 
        - Get a single user ${API}/users/id     
        - Update and Delete a users ${API}/users/id     
    */
    USERS = `${API}/users`,
    USERS_LIMIT = `${USERS}?limit=${LIMIT}`,
    /* - Add a new user */
    REGISTER = `${USERS}`,
    LOGIN = `${API}/auth/login`
    

export default {
    OFFSET,
    CARTS,
    CARTS_LIMIT,
    CATEGORIES,
    USER_CARTS,
    PRODUCTS,
    PRODUCTS_LIMIT,
    PRODUCT_BY_CATEGORY,
    USERS,
    USERS_LIMIT,
    REGISTER,
    LOGIN
}