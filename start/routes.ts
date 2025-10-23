/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// const SellerController = () => import('#controllers/sellers_controller')
// const WishlistController = () => import('#controllers/wishlists_controller')
import LoginController from '#controllers/login'
// import DashboardController from '#controllers/dashboard'
import ServicesController from '#controllers/ServicesController'
import SellerServicesController from '#controllers/seller_services_controller'

router.on('/').render('pages/home')
router.on('/about').render('pages/about')
// router.on('/services').render('pages/services')
router.on('/home').render('pages/home')
router.on('/contact').render('pages/contact')
router.on('/wishlist').render('pages/wishlist')

// Route.get('/seller/seller_dashboard', [DashboardController, 'index']).as('seller.dashboard')
router.get('/seller/seller_dashboard', [SellerServicesController, 'index']).as('admin.dashboard')
router
  .post('/seller/services/create', [SellerServicesController, 'create'])
  .as('seller.services.create')
router
  .post('/seller/services/:id/delete', [SellerServicesController, 'delete'])
  .as('admin.services.delete')

router.get('/login', [LoginController, 'index']).as('login')
router.post('/login', [LoginController, 'login']).as('admin.login.post')
router.get('/services', [ServicesController, 'index'])
