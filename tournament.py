#!/usr/bin/env python

# Copyright 2016 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START imports]
import os
import urllib
import json

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
# [END imports]

# [START main_page]
class MainPage(webapp2.RequestHandler):

    def get(self):
        template = JINJA_ENVIRONMENT.get_template('app/index.html')
        self.response.write(template.render())
# [END main_page]

# [START Tournaments]
class Tournaments(webapp2.RequestHandler):

    def get(self):
        response = {}
        response['userInformation'] = 'TESTE'
        self.response.out.write(json.dumps(response))
# [END Tournaments]

# [START TournamentDetails]
class TournamentDetails(webapp2.RequestHandler):

    def get(self, id):
        response = {}
        response['userInformation'] = 'TESTE' + id
        self.response.out.write(json.dumps(response))
# [END Tournaments]

# [START app]
app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/tournaments', Tournaments),
    ('/tournaments/(\d+)', TournamentDetails),
], debug=True)
# [END app]
