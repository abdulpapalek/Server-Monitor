#!/bin/sh


collectl -c 1 | awk 'FNR==4{print $10}'
