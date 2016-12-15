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
  Route.put('/project/:id', 'ProjectController.update')
  Route.delete('/project/:id', 'ProjectController.destroy')

  Route.get('project/:id/device', 'DeviceController.index')
  Route.post('/device', 'DeviceController.store')
  Route.put('/device/:id', 'DeviceController.update')
  Route.delete('/device/:id', 'DeviceController.destroy')

  Route.get('device/:id/check', 'CheckController.index')
  Route.post('/check', 'CheckController.store')
  Route.put('/check/:id', 'CheckController.update')
  Route.delete('/check/:id', 'CheckController.destroy')

  Route.get('check/:id/alert-type-device', 'AlertTypeDeviceController.index')
  Route.post('/alert-type-device', 'AlertTypeDeviceController.store')
  Route.put('/alert-type-device/:id', 'AlertTypeDeviceController.update')
  Route.delete('/alert-type-device/:id', 'AlertTypeDeviceController.destroy')

  Route.get('alert-type-device/:id/alert-log', 'AlertLogController.index')

}).prefix('/api/v1').middleware('auth')
