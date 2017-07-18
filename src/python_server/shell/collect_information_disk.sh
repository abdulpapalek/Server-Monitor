#!/bin/sh



df -h | awk '$NF=="/"{printf "%s",$5}'
	sleep 1
