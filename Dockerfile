FROM nginx:1.13.3

MAINTAINER CONGCONG

COPY dist c:/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]