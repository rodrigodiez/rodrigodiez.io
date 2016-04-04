FROM ruby:2.3

RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN bundle install
RUN bundle exec jekyll build

RUN mkdir -p /usr/share/nginx/html
RUN cp -R _site /usr/share/nginx/html

VOLUME /usr/share/nginx/html
