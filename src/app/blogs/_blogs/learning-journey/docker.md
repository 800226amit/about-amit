

# Kubernetes

what is kubernetes? 

why should need to use kubernetes?

node = server

multi node = cluster

master node = head quater

worker node = soldier

api server
cotroller manager
scheduler

kubelet = ceo

service proxy
etcd
kubectl

you need to write definitation of these concpet and serilies it and how it's works and draw diagram for it.


way to make kubernetes cluster

  kubeadm 
  minikube(local/ec2)
  kind cluster
  EKS/AKS/GKE

demo.yml

    key:value
    name: amit

    departments: 
        - hr
        - finance
        - it
        - marketing
        - sales

info: 
    name: amit
    age: 25
    gender: male
    address:
        city: hyderabad
        state: telangana
    jobs:
        - software engineer
        - data scientist
        - machine learning engineer
    
make kind cluster directory 

vim config.yml

kind: Cluster
apiVersion:
nodes: 
-role:control-plane
 image: kindes/node:v1.31.2
-role:control-plane
 image: kindes/node:v1.31.2
 -role:control-plane
 image: kindes/node:v1.31.2
 -role:control-plane
 image: kindes/node:v1.31.2
 extraPortMappings:
 -containerPort: 80
  hostPort: 80
  protocol: TCP
 -containerPort: 443
  protocol:TCP


create new kind cluster. 

  kind create cluster --name=tws-cluster --config=config.yml


kubectl cluster-info --context kind-tws-cluster

kubectl get nodes



/10/4/2026

makdir minikube

cd minikube 

 install minikube 
 
 command: curl -LO "https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64"

 sudo apt install -y curl wget apt-transport-https

 if the minikube is in /usr/local/bin/minikube

  for checking the version what the command need for this. 


start minikube 
  minikube start --driver=docker --vm=true

for installation minikube go on google and search minikube installation 

kubeadm

execute on both master and worker nodes 

sudo swapoff -a, explanition need

load necessry kernel modules required for kubernetes networking


set sysctl params required for kubernetes networking

install containerd

install kubernetes components

execute only on the master node
setup local kubeconfig. 

install a network plugin (calico)

generate join commnad 


watch kubectl get nodes 

execute on all of your worker nodes

perform pre-flight checks: 


nginx => pod => deployement => service => nodeport => ingress => loadbalancer

group of resources is called namespace

get name space

kubectl get ns or kubectl get namespace

create namespace

kubectl create ns pipelines

kubectl get ns pipelines

kubectl get ns 

kubectl run nginx --images=nginx:latest --namespace=pipelines # explanition required

kubectl get pods --namespace=pipelines # explanition required

vim namespace.yaml(manifest file)

kind: namespace
apiversion: v1
metadata:
    name: pipelines

kubectl apply -f namespace.yaml # explanition required

vim pod.yaml

kind: pod
apiversion: v1
metadata:
    name: amit
    namespace: pipelines
spec:
    containers:
        - name: amit
          image: nginx:latest
          ports:
            - containerPort: 80

kubectl apply -f pod.yaml # explanition required

kubectl exec -it -n pipelines amit -- /bin/bash # explanition required

kubectl describe pod amit -n pipelines # explanition required

kubectl get pods -n pipelines # explanition required

completed time 1:44 minutes