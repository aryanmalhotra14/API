const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer');

router.get('/',CustomerController.customer_get_all);
router.post('/',CustomerController.customer_create_customer);
router.get("/:customerId", CustomerController.customer_get_customer);
router.patch('/:customerId',CustomerController.customer_update_customer);
router.delete('/:customerId',CustomerController.customer_delete );

module.exports = router;