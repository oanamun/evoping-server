'use strict'

const UserSeed = require('./1_UserSeed');
const ProjectSeed = require('./2_ProjectSeed');
const CheckSeed = require('./4_CheckSeed');
const AlertTypeDeviceSeed = require('./5_AlertTypeDeviceSeed');
const AlertLogSeed = require('./6_AlertLogSeed');
/*
 |--------------------------------------------------------------------------
 | Database Seeder
 |--------------------------------------------------------------------------
 | Database Seeder can be used to seed dummy data to your application
 | database. Here you can make use of Factories to create records.
 |
 | make use of Ace to generate a new seed
 |   ./ace make:seed [name]
 |
 */

// const Factory = use('Factory')

class DatabaseSeeder {

  * run() {
    // i am doing this because the run method will not execute the seeds in order
    yield new UserSeed().go();
    yield new ProjectSeed().go();
    yield new CheckSeed().go();
    yield new AlertTypeDeviceSeed().go();
    yield new AlertLogSeed().go();
  }

}

module.exports = DatabaseSeeder
