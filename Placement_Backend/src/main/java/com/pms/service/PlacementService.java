
package com.pms.service;

import com.pms.model.Placement;
import com.pms.repository.PlacementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlacementService {
    @Autowired
    private PlacementRepository placementRepository;
    
    @Autowired
    private StudentService studentService;
    
    @Autowired
    private CompanyService companyService;
    
    public List<Placement> getAllPlacements() {
        return placementRepository.findAll();
    }
    
    public Placement getPlacementById(Long id) {
        return placementRepository.findById(id).orElse(null);
    }
    
    public Placement savePlacement(Placement placement) {
        placement.setStudent(studentService.getStudentById(placement.getStudent().getId()));
        placement.setCompany(companyService.getCompanyById(placement.getCompany().getId()));
        return placementRepository.save(placement);
    }
    
    public void deletePlacement(Long id) {
        placementRepository.deleteById(id);
    }
}