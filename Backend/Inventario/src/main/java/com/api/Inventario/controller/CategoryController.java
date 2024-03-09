package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.dto.request.CategoryRequest;
import com.api.Inventario.model.dto.response.CategoryResponse;
import com.api.Inventario.model.entity.Category;
import com.api.Inventario.service.Category.CategoryServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
@RequestMapping("categorys")
public class CategoryController extends BaseControllerImpl<CategoryResponse, CategoryRequest, Long, Category, CategoryServiceImpl> {
}
