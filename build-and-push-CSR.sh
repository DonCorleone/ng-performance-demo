#!/usr/bin/env bash

docker build -t registry.gitlab.com/l_x_t/ng-performance-demo:csr .
docker push registry.gitlab.com/l_x_t/ng-performance-demo:csr
