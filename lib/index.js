/**
  * @module HackerNewsAPILib
  *
  * The hacker news API
  */

'use strict';

const Configuration = require('./configuration');
const ItemsController = require('./Controllers/ItemsController');
const Ask = require('./Models/Ask');
const Story = require('./Models/Story');
const Item = require('./Models/Item');
const PollOption = require('./Models/PollOption');
const Comment = require('./Models/Comment');
const Job = require('./Models/Job');
const Poll = require('./Models/Poll');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of HackerNewsAPILib
    Configuration,
    // controllers of HackerNewsAPILib
    ItemsController,
    // models of HackerNewsAPILib
    Ask,
    Story,
    Item,
    PollOption,
    Comment,
    Job,
    Poll,
    // exceptions of HackerNewsAPILib
    APIException,
};

module.exports = initializer;
