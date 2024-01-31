using System;
using INDPRO_API.Models;
using INDPRO_API.Repository;

namespace INDPRO_API.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProducts();
        Task<Product> GetProductById(int id);
        Task AddProduct(Product product);
        Task UpdateProduct(int id, Product product);
        Task DeleteProduct(int id);
        Task<bool> FindProductById(int id);
    }
}

