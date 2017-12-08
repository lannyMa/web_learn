mv /etc/nginx /etc/nginx_$(date +%F)
mkdir -p /etc/nginx/conf.d/

mkdir -p /data/nginx-html
echo "maotai" > /data/nginx-html/index.html

cat >> /etc/nginx/nginx.conf<<EOF
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include                       mime.types;
    default_type                  application/octet-stream;
    server_name_in_redirect       off;
    client_max_body_size          20m;
    client_header_buffer_size     16k;
    large_client_header_buffers 4 16k;
    sendfile                      on;
    tcp_nopush                    on;
    keepalive_timeout             65;
    server_tokens                 off;
    gzip                          on;
    gzip_min_length               1k;
    gzip_buffers                  4 16k;
    gzip_proxied                  any;
    gzip_http_version             1.1;
    gzip_comp_level               3;
    gzip_types                    text/plain application/x-javascript text/css application/xml;
    gzip_vary                     on;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    log_format json '{"@timestamp": "$time_iso8601",'
    '"@version": "1",'
    '"client": "$remote_addr",'
    '"url": "$uri", '
    '"status": $status, '
    '"domain": "$host", '
    '"host": "$server_addr",'
    '"size":"$body_bytes_sent", '
    '"response_time": $request_time, '
    '"referer": "$http_referer", '
    '"http_x_forwarded_for": "$http_x_forwarded_for", '
    '"ua": "$http_user_agent" } ';
    access_log  /var/log/nginx/access.log  json;


    include /etc/nginx/conf.d/*.conf;
}
EOF
tree /etc/nginx/



cat >> /etc/nginx/conf.d/default.conf <<EOF
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  json;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
EOF
tree /etc/nginx/
