using System;
using INDPRO_API.Models;
using INDPRO_API.Repository;

namespace INDPRO_API.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<Product>> GetAllProducts()
        {
            return await _productRepository.GetAll();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _productRepository.GetById(id);
        }

        public async Task AddProduct(Product product)
        {
            await _productRepository.Create(product);
        }

        public async Task UpdateProduct(int id, Product product)
        {
            await _productRepository.Update(id,product);
        }

        public async Task DeleteProduct(int id)
        {
            await _productRepository.Delete(id);
        }

        public async Task<bool> FindProductById(int id)
        {
            return await _productRepository.FindProductById(id);
        }
    }
}

