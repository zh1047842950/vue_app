FROM zsf10838438/vue_env:v2 as build
RUN mkdir /workspace/vue_app -p
COPY . /workspace/vue_app
WORKDIR /workspace/vue_app
RUN source /etc/profile \
&& npm install --unsafe-perm \
&& npm run build

FROM zsf10838438/zsf_ubuntu:v1
RUN mkdir -p /home/vue_app/share_file
WORKDIR /home/vue_app
COPY ./start.sh .
RUN chmod u+x *.sh
COPY --from=build /workspace/vue_app/dist ./dist
VOLUME /usr/share/nginx/html/vue_app /home/vue_app/share_file

