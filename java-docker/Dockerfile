FROM java:8
WORKDIR /app
COPY . /app/
RUN javac Server.java
EXPOSE 8080
ENTRYPOINT ["java"]
CMD ["Server"]