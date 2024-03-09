package com.api.Inventario.service.Category;

import com.api.Inventario.model.dto.request.CategoryRequest;
import com.api.Inventario.model.dto.response.CategoryResponse;
import com.api.Inventario.model.entity.Category;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl extends BaseServiceImpl<CategoryResponse, CategoryRequest, Long, Category> implements ICategoryService {

    public CategoryServiceImpl(BaseRepository<Category, Long> repository) {
        super(repository);    }

}
