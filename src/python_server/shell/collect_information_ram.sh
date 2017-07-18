#!/bin/sh



top -bn1 | grep load | awk '{printf "%.2f", $(NF-2)}'
	sleep 1
