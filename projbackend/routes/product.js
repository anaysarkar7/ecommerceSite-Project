const express=require("express")
const router=express.Router();


const{getProductById,createProduct,getProduct,photo,updateProduct,deleteProduct,getAllProducts,getAllUniqueCategories}=require("../controllers/product")
const{isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth")
const{getUserById}=require("../controllers/user")

//params
router.param("userId", getUserById);
router.param("productTd", getProductById);

//routes
    //readRoutes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);
    //deleteRoutes
router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo)
    //deleteRoutes
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct);
    //updateRoutes
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct);


    //listingRoutes
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports= router;