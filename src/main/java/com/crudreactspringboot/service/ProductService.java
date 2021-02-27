package com.crudreactspringboot.service;

import com.crudreactspringboot.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product saveProduct(Product product);
    Product updateProduct(Long id,Product p);
    void deleteProduct(Long id);
}
