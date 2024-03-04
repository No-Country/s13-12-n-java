package com.api.Inventario.service.Supermarket;

import com.api.Inventario.model.dto.request.SupermarketRequest;
import com.api.Inventario.model.dto.response.SupermarketResponse;
import com.api.Inventario.model.entity.Category;
import com.api.Inventario.model.entity.Supermarket;
import com.api.Inventario.repository.CategoryRepository;
import com.api.Inventario.repository.SupermarketRepository;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SupermarketServiceImpl extends BaseServiceImpl<SupermarketResponse, SupermarketRequest, Long, Supermarket> implements ISupermarketService{
    private ModelMapper modelMapper;
    private final SupermarketRepository supermarketRepository;
    private final CategoryRepository categoryRepository;

    public SupermarketServiceImpl(BaseRepository<Supermarket, Long> baseRepository
    , ModelMapper modelMapper,
                                  SupermarketRepository supermarketRepository,
                                  CategoryRepository categoryRepository) {
        super(baseRepository);
        this.modelMapper = modelMapper;
        this.supermarketRepository = supermarketRepository;
        this.categoryRepository = categoryRepository;
    }
    @Override
    @Transactional
    public void createSupermarket(SupermarketRequest request) {
        Supermarket supermarket = modelMapper.map(request,Supermarket.class);
        Optional<Category> categories = categoryRepository.findById(request.getCategory());
        supermarket.setCategory(categories.get());
        supermarketRepository.save(supermarket);
        categories.get().getSupermarketList().add(supermarket);
        categoryRepository.save(categories.get());
    }
}


