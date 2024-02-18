package com.api.Inventario.context;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration /*la clase con esta configuracipon tiene la capacidad de crear bines, los cuales forman parte de la aplication context de spring/springboot*/
public class OpenApiConfig {
    // Para ingresar a la documentación de la API, se debe ingresar a la URL: http://localhost:8080/swagger-ui/index.html#/
    @Bean
    public OpenAPI OngAPI() {
        final String securitySchemeName = "bearerAuth";
        return new OpenAPI()
                .info(new Info()
                        .title("Atlantis Inventory")
                        .description("La API REST de La App de Inventarios.")
                        .version("v1"))
                .externalDocs(new ExternalDocumentation()
                        .description("")
                        .url(""))
                .addSecurityItem(new SecurityRequirement()
                        .addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName, new SecurityScheme()
                                .name(securitySchemeName)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));
    }
}
