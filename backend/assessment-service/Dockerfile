FROM maven:3.8-amazoncorretto-17 AS build

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package -q

FROM amazoncorretto:17-alpine3.15

WORKDIR /app

COPY --from=build /build/target/assessment-service-1.0.jar /app/

ENTRYPOINT ["java", "-jar", "assessment-service-1.0.jar"]