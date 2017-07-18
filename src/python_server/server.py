import zerorpc
import logging
import json
import subprocess

class Collectl(object):

	def executeCollectl_cpu(self):

		"""
			1. execute shell script  for a  certain period of time(most likely 5  seconds)
			2. call function to parse file 
			3. return  json data
			4. call function to delete file
			5. call function to delete all processes
			
		"""
		result=subprocess.Popen(['./shell/collect_information_cpu.sh'], stdout=subprocess.PIPE)
		return result.stdout.readlines();

	def executeCollectl_network(self):
		"""
			1. execute shell script  for a  certain period of time(most likely 5  seconds)
			2. call function to parse file 
			3. return  json data
			4. call function to delete file
			5. call function to delete all processes
			
		"""
		result=subprocess.Popen(['./shell/collect_information_network.sh'], stdout=subprocess.PIPE)
		return result.stdout.readlines();

	def executeCollectl_ram(self):
		"""
			1. execute shell script  for a  certain period of time(most likely 5  seconds)
			2. call function to parse file 
			3. return  json data
			4. call function to delete file
			5. call function to delete all processes
			
		"""
		result=subprocess.Popen(['./shell/collect_information_ram.sh'], stdout=subprocess.PIPE)
		return result.stdout.readlines();

	def executeCollectl_disk(self):
		"""
			1. execute shell script  for a  certain period of time(most likely 5  seconds)
			2. call function to parse file 
			3. return  json data
			4. call function to delete file
			5. call function to delete all processes
			
		"""
		result=subprocess.Popen(['./shell/collect_information_disk.sh'], stdout=subprocess.PIPE)
		return result.stdout.readlines();

	def jsonfle(self,name):

		cpu  = self.executeCollectl_cpu();
		ram  =  self.executeCollectl_network();
		network = self.executeCollectl_network();
		disk = self.executeCollectl_disk();

		d = { "user": "root","CPU": cpu[0],"MEMORY": ram[0],"TIME": 23123,"DISK": disk[0], "Network": network[0]}

		json_string = json.dumps(d);
		print  json_string;
		return json_string;
		"""
		return "Hello, %s" % name
		"""

logging.basicConfig();
s = zerorpc.Server(Collectl());
s.bind("tcp://0.0.0.0:4444");
s.run();