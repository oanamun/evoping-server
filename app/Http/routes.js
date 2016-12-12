'use strict'

/*
 |--------------------------------------------------------------------------
 | Router
 |--------------------------------------------------------------------------
 |
 | AdonisJs Router helps you in defining urls and their actions. It supports
 | all major HTTP conventions to keep your routes file descriptive and
 | clean.
 |
 | @example
 | Route.get('/user', 'UserController.index')
 | Route.post('/user', 'UserController.store')
 | Route.resource('user', 'UserController')
 */

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/login', 'AuthController.login')
Route.post('/signup', 'AuthController.signup')

Route.group('version1', function () {
  Route.get('/project', 'ProjectController.index')
  Route.post('/project', 'ProjectController.store')
  Route.delete('/project/:id', 'ProjectController.destroy')

  Route.get('/device', 'DeviceController.index')
  Route.post('/device', 'DeviceController.store')
  Route.put('/device', 'DeviceController.update')
  Route.delete('/device/:id', 'DeviceController.destroy')

  Route.get('/check', 'CheckController.index')
  Route.post('/check', 'CheckController.store')
  Route.put('/check', 'CheckController.update')
  Route.delete('/check/:id', 'CheckController.destroy')

  Route.get('/alert-type-device', 'AlertTypeDeviceController.index')
  Route.post('/alert-type-device', 'AlertTypeDeviceController.store')
  Route.put('/alert-type-device', 'AlertTypeDeviceController.update')
  Route.delete('/alert-type-device/:id', 'AlertTypeDeviceController.destroy')

  Route.get('/alert-log', 'AlertLogController.index')
  Route.post('/alert-log', 'AlertLogController.store')
  Route.put('/alert-log', 'AlertLogController.update')
  Route.delete('/alert-log/:id', 'AlertLogController.delete')

}).prefix('/api/v1').middleware('auth')
