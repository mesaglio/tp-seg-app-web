FROM ubuntu
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install git sudo=1.8.31-1ubuntu1 make gcc openjdk-8-jdk -y
RUN adduser --disabled-password --gecos '' newuser
USER newuser
WORKDIR /home/newuser
RUN git clone https://github.com/mesaglio/CVE-2021-3156 exploit
CMD ["bash"]