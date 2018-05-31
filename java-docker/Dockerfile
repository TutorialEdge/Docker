FROM java:8
COPY Server.java /
RUN javac Server.java
EXPOSE 8080
ENTRYPOINT ["java"]
CMD ["server"]