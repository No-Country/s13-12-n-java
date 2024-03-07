package com.api.Inventario.service.Company;

import com.api.Inventario.model.dto.request.CompanyRequest;
import com.api.Inventario.model.dto.response.CompanyResponse;
import com.api.Inventario.model.entity.Company;
import com.api.Inventario.repository.CompanyRepository;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyServiceImpl extends BaseServiceImpl<CompanyResponse, CompanyRequest, Long, Company> implements ICompanyService {

    @Autowired
    private CompanyRepository repository;
    public CompanyServiceImpl(BaseRepository<Company, Long> repository) {
        super(repository);
    }


    @Override
    public void deleteById(Long id) {
        Optional<Company> optionalCompany = this.repository.findById(id);
        if (optionalCompany.isEmpty()) {
            throw new RuntimeException("Product not found");
        }
        this.repository.deleteById(id);
    }
}
