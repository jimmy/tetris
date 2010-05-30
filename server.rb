require 'rubygems'
require 'sinatra'

get '/' do
  File.read("public/index.html")
end
