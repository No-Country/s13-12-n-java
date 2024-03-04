package com.api.Inventario.model.dto.response;
import com.api.Inventario.model.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupermarketResponse {

        Long id;
        String name;
        String description;
        Double price;
        int stock;
        int stockMin;
        String image;
        Date expiration;
        String unitOfMeasure;
        boolean status;
        Category category;

}
