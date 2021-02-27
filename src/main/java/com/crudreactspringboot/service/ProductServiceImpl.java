package com.crudreactspringboot.service;

import com.crudreactspringboot.model.Product;
import com.crudreactspringboot.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        Product product=productRepository.findById(id).orElseThrow(()->new RuntimeException("There is no product with id: "+id));
        return  product;
    }

    @Override
    public Product updateProduct(Long id, Product p) {
        Product product=this.getProductById(id);
        product.setTitle(p.getTitle());
        product.setDescription(p.getDescription());
        product.setPrice(p.getPrice());
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        Product product=this.getProductById(id);
        productRepository.delete(product);
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
