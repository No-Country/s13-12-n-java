package com.api.Inventario.controller;

import com.api.Inventario.controller.base.BaseControllerImpl;
import com.api.Inventario.model.dto.request.CompanyRequest;
import com.api.Inventario.model.dto.response.CompanyResponse;
import com.api.Inventario.model.entity.Company;
import com.api.Inventario.service.Company.CompanyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("companys")
public class CompanyController extends BaseControllerImpl<CompanyResponse, CompanyRequest, Long, Company, CompanyServiceImpl> {

    @Autowired
    private CompanyServiceImpl companyServiceImpl;

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        this.companyServiceImpl.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}
