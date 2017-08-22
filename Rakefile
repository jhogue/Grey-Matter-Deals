require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

task :default => :serve

desc 'Build site with Jekyll'
task :build do
  system 'bundle exec sass -r sass-globbing --watch _sass:assets/css'
  jekyll 'build'
end

desc 'Build and start local server'
task :serve do
  system 'bundle exec sass -r sass-globbing --watch _sass:assets/css &'
  #jekyll 'serve -w --baseurl="/"' Optional, if we need to serve from a different root, change below
  # If you need to change the value below, also change it in _config.yml
  jekyll 'serve -w --baseurl="/b365/"'
end

def jekyll(opts = '')
  system 'rm -rf _site'
  system 'bundle exec jekyll ' + opts
end
